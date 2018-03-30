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
            <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../../static/img/img.jpg">
                    {{username}}
                </span>
            <!--<el-dropdown trigger="click" @command="handleCommand">-->
                <!--<span class="el-dropdown-link">-->
                    <!--<img class="user-logo" src="../../../../static/img/img.jpg">-->
                    <!--{{username}}-->
                <!--</span>-->
                <!--&lt;!&ndash;<el-dropdown-menu slot="dropdown">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-dropdown-item command="loginout">退出</el-dropdown-item>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-dropdown-menu>&ndash;&gt;-->
            <!--</el-dropdown>-->
        </div>

    </div>
</template>
<script  src='./Header.js'>

</script>
<style lang='less' scoped src='./Header.less'>

</style>
