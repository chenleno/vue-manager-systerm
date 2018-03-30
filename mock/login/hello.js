/**
 * Created by chenqi1 on 2018/2/26.
 */
/**
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/hello',
    response: function (req, res) {
        res.send(
            {"code":'200',"message":"code is ok","data":{
                "userName":"王大锤",
                "userId":"dweq313123"
                }}
        )
    }
}

