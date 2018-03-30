/**
 * Created by chenqi1 on 2018/3/5.
 */
//    旧路由配置
export default {
    data() {
//            项目路由配置
        return {
            items: [
                {
                    icon: 'iconfont icon-gaikuang',
                    index: '1',
                    title: '概览',
                    subs : [
                        {
                            index: 'home',
                            title:'数据概况',
                        }
                    ]

                },
                {
                    icon: 'iconfont icon-yonghuguanli',
                    index: '2',
                    title: '用户管理',
                    subs: [
                        {
                            index: 'userManager',
                            title: '用户管理',
                        }
                    ]

                },
            ]
        }

        //    旧路由配置
//            return {
//
//                items: [
//                    {
//                        icon: 'el-icon-setting',
//                        index: 'home',
//                        title: '自述'
//                    },
//                    {
//                        icon: 'el-icon-menu',
//                        index: '2',
//                        title: '表格',
//                        subs: [
//                            {
//                                index: 'basetable',
//                                title: '基础表格'
//                            },
//                            {
//                                index: 'vuetable',
//                                title: 'Vue表格组件'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-date',
//                        index: '3',
//                        title: '表单',
//                        subs: [
//                            {
//                                index: 'baseform',
//                                title: '基本表单'
//                            },
//                            {
//                                index: 'upload',
//                                title: '文件上传'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-upload2',
//                        index: 'drag',
//                        title: '拖拽'
//                    }
//                ]
//            }
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    }
}
