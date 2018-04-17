/**
 * Created by chenqi1 on 2018/3/1.
 */
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

                    self.$store.commit('ms_username','hello')
                    self.$router.push('/home');

                    //self.$axios.post('/hello' , this.ruleForm).then(res => {
                    //    if(res.data.success){
                    //        self.$store.commit('ms_username',res.data.data.userName)
                    //        self.$router.push('/home');
                    //    }else {
                    //        alert('error login')
                    //    }
                    //})

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
