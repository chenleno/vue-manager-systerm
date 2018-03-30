/**
 * Created by chenqi1 on 2018/3/28.
 */
import axios from 'axios';
import * as util from '../tools/util/util.js';

const instance = axios.create({
    //baseURL: 'http://rap2api.taobao.org/app/mock/224',

    baseURL : '',
    timeout: 10000
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
//错误处理
instance.interceptors.response.use(function(response) {
    return response;
}, util.catchError);

export default instance;
