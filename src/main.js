import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import store from './vuex/store'
import "tools/filter/filter"; //全局过滤器
//全包引入echarts
import echarts from 'echarts'

Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts


//拓展权限指令
Vue.directive('has' , {
    bind : function(el , binding , vnode){
        if(!Vue.prototype.$_has(binding.value)){

            vnode.context.$nextTick(() => {
                el.parentNode.removeChild(el)

            })
        }
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
