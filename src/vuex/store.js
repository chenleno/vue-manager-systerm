/**
 * Created by chenqi1 on 2018/2/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const options = {

    // 多页面共享数据
    state: {
        //测试用名
        data: {
            //跳转子页面时候的:childUserId
        },
        //信息反馈
        tipMsg :'',
        //登录用户token
        token:'',
        ms_username:''
    },

    // 操作
    actions: {},

    // 数据变更
    mutations: {
        ms_username : (state , data) => {
            sessionStorage.ms_username = data;
            state.ms_username = data;
        },
        data : (state , data) => {
            data.forEach(function (item) {
                state.data[item.name] = item.value;
            })

        }

    },
}

// 生成 mutations 方法
//function generate(name) {
//    return function (state, value) {
//        state[name] = value || state[name];
//    }
//}
//
//// 为每个 state 字段生成对应的 mutations 方法
//Object.keys(options.state).forEach((key) => {
//    options.mutations[key] = generate(key);
//});


// 创建一个 store 对象用于管理应用状态
export default new Vuex.Store(options)

//export default options;
