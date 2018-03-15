module.exports = {
    api: '/api/udcp-base/user/userId/baseInfo',
    response: function (req, res) {
        res.send(
            {
                "data": {
                    "userId": "xxx", 
                    "originalId": "xxx", 
                    "registerTime": "2018-01-01 11:00:00", 
                    "registerSource": 1, //注册渠道（1：贩售机，2：其它）
                    "nickname": "张三", 
                    "gender": 1,// 性别（1：男，2：女）
                    "age": 38, 
                    "mainWallet": 200.00, //主钱包
                    "viceWallet": 200.00, //副钱包 
                    "userType": 1,// 用户类型（1：泛用户，2：普通用户，3：会员）
                    "score": 123, //积分 
                    "userClass": 1, //用户等级 产品暂未规划 前端可显示空
                    "mobile": 13988888888,
                    "wechatAccount": "xxx", //微信账号 
                    "alipayAccount": "xxx", //支付宝账号 
                    "province": "xxx",
                    "city": "xxx", 
                    "district": "xxx", 
                    "detailAddress": "xxx", 
                    "tags": ["白领", "生活品质"]
                },
                 "code": "200", 
                 "message": "success"
            }
        )
    }
}