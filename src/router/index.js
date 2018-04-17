import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../vuex/store'

Vue.use(VueRouter);

//项目路由组
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: resolve => require(['../views/login/Login.vue'], resolve)
    },
    {
        path: '/home',
        component: resolve => require(['../components/common/Home/Home.vue'], resolve),
        meta:{
            requiresAuth:true,
        },
        children:[
            {
                path: '/',
                component: resolve => require(['../views/dashboard/dashboard.vue'], resolve)
            },
            {
                path: '/userManager',
                component: resolve => require(['../views/userManager/userManager/userManager.vue'], resolve),
                // children:[
                //
                // ]
            },
            {
                path: '/userInfo',
                component: resolve => require(['../views/userManager/userInfo/userInfo.vue'],resolve)
            }
        ]
    }
]


//此处为了测试，使用登录成功后返回的userName作为登录标识
//正式场景中应使用token
// 页面刷新时，重新赋值ms_username
if (window.sessionStorage.getItem('ms_username')) {
    store.commit('ms_username', window.sessionStorage.getItem('ms_username'))
}

//创建路由实例
const router = new VueRouter({
    routes
})

//路由拦截配置
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {  // 判断该路由是否需要登录权限
        if (store.state.ms_username) {                          // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}                  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router
