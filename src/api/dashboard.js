/**
 * Created by chenqi1 on 2018/3/29.
 */
import instance from './index';
const preUrlPath = '/api/udcp-base';
//获取数据块
const getBaseData = {
    p: [`get,${preUrlPath}/base`],
    r: params => {
        return instance.get(`${preUrlPath}/base`, {params})
    }
};
//获取top10
const getTopData = {
    p: [`get,${preUrlPath}/goods/**`],
    r: (id , params) => {
        return instance.get(`${preUrlPath}/goods/${id}`,{params})
    }
};
//越权请求
const notAllowed = {
    p: ['get,/roles/notAllowed'],
    r: params => {
        return instance.get(`${preUrlPath}/GET/roles/notAllowed`, {params})
    }
}

export {
    getBaseData,
    getTopData,
    notAllowed
}
