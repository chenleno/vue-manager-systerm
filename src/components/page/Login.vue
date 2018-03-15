<template>
    <div class="login-wrap">
        旧的login
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
            </el-form>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },

                checked: false
            }
        },
//        页面渲染时获取cookie
        mounted() {
            this.getCookie()
        },
        methods: {
            submitForm(formName) {
                const self = this;
//                输入验证
                self.$refs[formName].validate((valid) => {
                    if (valid) {
//                        复选框被勾选，设置cookie
                        if(self.checked == true) {
//                            传入账号，密码，有效天数
                            self.setCookie(self.ruleForm.username , self.ruleForm.password , 7)
                        }else {
                            self.clearCookie()
                        }
                        self.$axios.post('/mock/hello' , this.ruleForm).then(res => {
                            if(res.data.success){
                                self.$store.commit('ms_username',res.data.data.userName)
                                localStorage.setItem('ms_username',res.data.data.userName);
                                self.$router.push('/readme');
                            }else {
                                alert('error login')
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
//            写cookie
            setCookie(c_name , c_pwd , exdays){
                var exdate = new Date() //获取当前时间
                exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays) // 保存的天数
//                字符串拼接cookie
                window.document.cookie = 'userName' + '=' + c_name + ";path=/;expires=" + exdate.toGMTString()
                window.document.cookie = 'userPwd' + '=' + c_pwd + ";path=/;expires=" + exdate.toGMTString()
            },
//            读cookie
            getCookie(){
                if(document.cookie.length > 0) {
                    var arr = document.cookie.split('; ')

                    arr.forEach((e) => {
                        var arr2 = e.split('=')
                        if(arr2[0] == 'userName'){
                            this.ruleForm.username = arr2[1]
                        }else if(arr2[0] == 'userPwd'){
                            this.ruleForm.password = arr2[1]
//                            记住密码状态也要保存
                            this.checked = true
                        }
                    })
                }
            },
//            清除cookie
            clearCookie(){
                this.setCookie('' , '' , -1) //修改2值都为空，天数为负1天
            }
        }
    }
</script>

<style lang="less" type="text/less" scoped>

    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        .ms-login {
            .csClass {
                color: red;
            }
        }
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
