<template>

    <div class="wrapper">

        <v-head></v-head>
        <v-sidebar></v-sidebar>


        <div class="content">
            <!--<el-scrollbar wrap-class="el-select-dropdown__wrap">-->

                <transition name="move" mode="out-in"><router-view></router-view></transition>
            <!--</el-scrollbar>-->

        </div>

    </div>

</template>

<script src='./Home.js'>

</script>

<style lang='less' scoped src='./Home.less'>

</style>
