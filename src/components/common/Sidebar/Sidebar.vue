<template>
    <div class="sidebar shadow">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">

                <template v-if="item.subs">

                    <el-submenu :index="item.index">

                        <!--改写导航配置使支持三级导航-->
                        <template slot="title"><i :class="item.icon"></i> &nbsp;{{ item.title }}</template>

                        <template v-for='a in item.subs'>

                            <template v-if='a.subs'>

                                <el-submenu :index='a.index'>
                                    <template slot="title"><i :class="a.icon"></i>{{ a.title }}</template>

                                    <el-menu-item v-for="(b,i) in a.subs" :key="i" :index="b.index">{{ b.title }}
                                    </el-menu-item>

                                </el-submenu>

                            </template>
                            <template v-else>
                                <el-menu-item :index="a.index">
                                    <i :class="a.icon"></i>{{ a.title }}
                                </el-menu-item>
                            </template>


                        </template>



                        <!--<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}-->
                        <!--</el-menu-item>-->

                    </el-submenu>

                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script src='./Sidebar.js'>

</script>

<style lang='less' src='./Sidebar.less'>

</style>
