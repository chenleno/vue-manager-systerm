module.exports = {
    api: '/api/udcp-base/user/userId/consumeRecord',
    response: function (req, res) {

        res.send(
            {
                "success": true,
                "message": "code is ok",
                    "data": [
                        {
                            "createTime": "2018-01-01 11:00:00", //订单时间
                            "orderType": 1, //订单类型（1：贩售机订单，2：微商城订单）
                            "payStatus": 1, // 支付状态（1：待付款，2：支付失败，3：支付成功）
                            "orderDetail":
                                [
                                    {
                                        "name": "商品名称",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                    {
                                        "name": "xxx",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                ],
                            "amounts": 22.22,// 订单金额
                            "payWay": 1,       //支付方式（1：微信，2：支付宝，3：储值卡，4：其他）
                            "deviceId": "xxx",
                            "province": "江西",
                            "city": "南昌",
                            "district": "安义",
                            "detailAddress": "解放大道"
                        },
                        {
                            "createTime": "2018-01-01 11:00:00", //订单时间
                            "orderType": 2, //订单类型（1：贩售机订单，2：微商城订单）
                            "payStatus": 2, // 支付状态（1：待付款，2：支付失败，3：支付成功）
                            "orderDetail":
                                [
                                    {
                                        "name": "商品名称",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                    {
                                        "name": "xxx",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                ],
                            "amounts": 22.22,// 订单金额
                            "payWay": 2,       //支付方式（1：微信，2：支付宝，3：储值卡，4：其他）
                            "deviceId": "xxx",
                            "province": "xxx",
                            "city": "xxx",
                            "district": "xxx",
                            "detailAddress": "xxx"
                        }, {
                            "createTime": "2018-01-01 11:00:00", //订单时间
                            "orderType": 1, //订单类型（1：贩售机订单，2：微商城订单）
                            "payStatus": 3, // 支付状态（1：待付款，2：支付失败，3：支付成功）
                            "orderDetail":
                                [
                                    {
                                        "name": "商品名称",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                    {
                                        "name": "xxx",  //商品名称
                                        "goodsCount": 11  //数量
                                    },
                                ],
                            "amounts": 22.22,// 订单金额
                            "payWay": 3,       //支付方式（1：微信，2：支付宝，3：储值卡，4：其他）
                            "deviceId": "xxx",
                            "province": "xxx",
                            "city": "xxx",
                            "district": "xxx",
                            "detailAddress": "xxx"
                        }]
            }
        )
    }
}