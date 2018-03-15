/**
 * Created by chenqi1 on 2018/3/9.
 */
module.exports = {
    api: '/api/kdxc-udcp-base/goods/orderLineData',
    response: function (req, res) {

        res.send(
            {   "success": "200",
                "message":"success",
                "data":{
                    date : ['周一','周二','周三','周四','周五','周六','周日'],
                    lineData:[
                        {
                            name:'预定订单',
                            data:[343, 757, 24, 647, 535, 22, 435]
                        },
                        {
                            name:'线下订单',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                }}
        )
    }
}
