<template>
    <div class="header shadow">
        <div class="logo">
            <p>KDX用户系统</p>
            <span>Uers Data Platform</span>
        </div>
        <div class="user-loginout">
            <i class="icon iconfont icon-tuichu1" @click="handleCommand('loginout')"></i>
        </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../../static/img/img.jpg">
                    {{username}}
                </span>
                <!--<el-dropdown-menu slot="dropdown">-->
                    <!--<el-dropdown-item command="loginout">退出</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
            </el-dropdown>
        </div>

    </div>
</template>
<script  src='./Header.js'>

</script>
<style lang='less' scoped src='./Header.less'>

</style>
