<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";
    /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
    @import "../static/css/iconfont.css"; /*图标文件*/
</style>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    import instance from './api'
    import * as util from './tools/util/util'

    //    请求拦截句柄
    let myInterceptor
    export default {
        data (){
            return {
                userData: null
            }
        },
        created: function () {
            this.signIn()
        },
        methods: {

            signIn: function () {
                let vm = this
                instance.get('/access').then(res => {
                    let userInfo = res.data
                    //取得资源权限对象
                    let resourcePermission = vm.getPermission(userInfo);

                    //使用资源权限设置请求拦截
                    vm.setInterceptor(resourcePermission);

//拓展权限验证方法
                    Vue.prototype.$_has = function (rArray) {

                        let resources = [];
                        let permission = true;
                        //提取权限数组
                        if (Array.isArray(rArray)) {
                            rArray.forEach(function (e) {

//                                对api表中的param参数进行处理，去掉前缀
                                let newE = e.p[0].replace('/api/udcp-base', '')

                                resources = resources.concat(newE);
                            });
                        } else {
                            resources = resources.concat(rArray.p);
                        }
                        //校验权限
                        resources.forEach(function (p) {
                            if (!resourcePermission[p]) {
                                return permission = false;
                            }
                        });
                        return permission;
                    }


                })
            },

//            获取用户权限表
            getPermission: function (userInfo) {
                let resourcePermission = {};
                if (Array.isArray(userInfo.data)) {
                    userInfo.data.forEach(function (e, i) {
                        let key = e.method.toLowerCase() + ',' + e.url;
                        resourcePermission[key] = true;
                    });
                }
                return resourcePermission;
            },
            //    设置axios拦截器，判断权限
            setInterceptor: function (resourcePermission) {
                let vm = this;
                //      instance为axios实例
                myInterceptor = instance.interceptors.request.use(function (config) {
                    //得到请求路径
                    //此处为对预定义的"/GET/medications"的处理，实际情况可能会修改
                    let perName = config.url.replace(config.baseURL, '').replace('/GET', '').replace('/POST', '').replace('/api/udcp-base', '').split('?')[0];
                    //权限格式1 /path/${param}
                    let reg1 = perName.match(/^(\/[^\/]+\/)[^\/]+$/);
                    if (reg1) {
                        perName = reg1[1] + '**';
                    }
                    //权限格式2 /path/${param}/path
                    let reg2 = perName.match(/^\/[^\/]+\/([^\/]+)\/[^\/]+$/);
                    if (reg2) {
                        perName = perName.replace(reg2[1], '*');
                    }
                    //校验权限
                    if (!resourcePermission[config.method + ',' + perName]) {
                        //调试信息
                        console.warn(resourcePermission, config.method + ',' + perName);
                        vm.$message({
                            message: '无访问权限，请联系企业管理员',
                            type: 'warning'
                        });
                        //拦截请求
                        return Promise.reject({
                            message: 'no permission'
                        });
                    }
                    return config;
                });
            },

        }
    }

</script>
