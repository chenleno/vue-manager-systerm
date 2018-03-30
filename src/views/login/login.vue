<template>
    <div class="login-wrap">
        <div class="ms-title">KDX用户系统</div>
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
                <p style="font-size:12px;line-height:30px;color:#999;"></p>
            </el-form>

        </div>
    </div>
</template>

<script type="text/ecmascript-6" src='./login.js'>

</script>

<style lang="less" type="text/less" scoped src='./login.less'>

</style>
