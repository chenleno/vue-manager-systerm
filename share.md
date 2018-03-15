# [VUE框架后台管理系统模板](https://segmentfault.com/a/1190000008582706)
基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案。

## 技术要点

> ES6 语法
- [模块化](https://www.cnblogs.com/Nutrient-rich/p/7047877.html)
    + import & (export || export default)
    + require & (exports || module.exports)

> 组件
- component & page (颗粒度划分)
- 组件结构
- 组件间通信

> 路由
- 路由定义
- 路由传参

> 生命周期
- [参考](https://segmentfault.com/a/1190000008010666)

> [axios通信模块](https://www.kancloud.cn/yunye/axios/234845)
- [箭头函数](http://imweb.io/topic/5848d21b9be501ba17b10a99)

> [组件状态管理vuex](https://vuex.vuejs.org/zh-cn/intro.html)
- 声明存储变量时必须给出用处注释

> [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)
- 组件化界面元素（需仔细研究组件所含指令及相关配置）

> (可选了解)[vue-cli的webpack模板项目配置文件分析](http://blog.csdn.net/hongchh/article/details/55113751)

## 功能补充
- [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation) 版本升级至2.2.0 对应官网文档
- 引入 [vuex](https://vuex.vuejs.org/zh-cn/intro.html) 管理组件状态
- 添加对less的支持
- 完善vue-webpack的相关配置
- 搭建mock服务，实现mock接口本地化

## 开发配置 (针对webstorm)
- 安装vue插件增加对.vue文件的支持
- 开启编辑器的ES6支持
- js语法支持
```javascript
    <script type="text/ecmascript-6">   //添加编辑器对箭头函数的支持
```

- less语法支持
```javascript
    <style 
    lang="less"  //声明less语法
     scoped>     //声明样式作用域为局部，只作用于该组件
```
## 已完善
- [路由拦截](https://www.jianshu.com/p/b0cd138aeb4f)
- 开发开启proxyTable，转发请求，摆脱winscp
    + 1./build/dev-server.js中开启代理（需注释掉mock部分）
    ```javascript
    
    // proxy api requests
    Object.keys(proxyTable).forEach(function (context) {
        var options = proxyTable[context]
        if (typeof options === 'string') {
            options = { target: options }
        } 
        app.use(proxyMiddleware(options.filter || context, options))
    })  
    ```
    + 2./config/index.js 中配置目标域名及转发规则
    ```javascript
           proxyTable: {
            '/api':{
                target:'http://iot.kdxcloud.com',           //请求转发目标
                changeOrigin:true,                          //Set the option changeOrigin to true for name-based virtual hosted sites.
                pathRewrite:{
                    '/api':'/api'                           //接口覆写
                }
            }
        },
    ```

## 函待完善
- ~~路由拦截~~  
- 登录鉴权
- 权限控制
- 公共服务封装

## 踩坑
- VUE组件必须且只能包含在一个父容器中
```javascript
<template>
    <div class="showData">          //如果没有该容器则会报错
            <div class="baseData">
                <el-row>
                    <el-col :span="3" v-for="(a, index) in dataObj.baseData" :key="index" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="padding: 14px;">
                                <p>{{a.dataName}}</p>
                                <p>{{a.dataNum}}</p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div class="totalData">
                <el-row>
                    <el-col :span="3" v-for="(data, index) in dataObj.totalData " :key="index"
                            :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="padding: 14px;">
                                <p>{{data.dataName}}</p>
                                <p>{{data.dataNum}}</p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
    </div>
</template>
```

- 组件调用使用原生js方法需使用.native修饰符，但有可能会产生冒泡
```javascript
<my-component v-on:click.native="doTheThing"></my-component>
```

- VUE 父子组件传值
    + 子组件监听父组件值变化并触发函数
    
    ```javascript
        //在子组件实例中添加watch方法，监听需要感知的父组件参数
    watch : {
      'timeSlice' : function( newVal , oldVal ){
            if(newVal){
                this.getData(newVal)
            }
      }
    }
    ```
- 封装组件配合<template slot-scope='' >标签完成标签插入，便于添加事件

- build后打包文件 vender.js体积过大
    + 

## 问题
- 在配置代理域名时，如果配置本地服务器域名（如：iot.kdxcloud.com)，请求可以直接获取到response信息
  
  如果配置的是线上域名（如：letlink.kdxcloud.com:88），请求获取的response为 notlogin