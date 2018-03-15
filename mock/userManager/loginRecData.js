module.exports = {
    api: '/api/udcp-base/user/userId/loginRecord',
    response: function (req, res) {

        res.send(
            {
                "success": true,
                "message": "code is ok",
                    'data':
                        [
                            {
                                "loginTime": "2018-01-01 11:00:00",
                                "loginSource": 1, //登录渠道（1：微商城，2：贩售机）
                                "loginDevice": "xxx",
                                "province": "xxx",
                                "city": "xxx",
                                "district": "xxx",
                                "detailAddress": "xxx",
                                "loginInTime": 0, //登陆时长
                            },
                            {
                                "loginTime": "2018-01-01 11:00:00",
                                "loginSource": 1, //登录渠道（1：微商城，2：贩售机）
                                "loginDevice": "xxx",
                                "province": "xxx",
                                "city": "xxx",
                                "district": "xxx",
                                "detailAddress": "xxx",
                                "loginInTime": 0,   // 登陆时长   
                            },
                            {
                                "loginTime": "2018-01-01 11:00:00",
                                "loginSource": 1, //登录渠道（1：微商城，2：贩售机）
                                "loginDevice": "xxx",
                                "province": "xxx",
                                "city": "xxx",
                                "district": "xxx",
                                "detailAddress": "xxx",
                                "loginInTime": 0,   // 登陆时长   
                            },
                            {
                                "loginTime": "2018-01-01 11:00:00",
                                "loginSource": 1, //登录渠道（1：微商城，2：贩售机）
                                "loginDevice": "xxx",
                                "province": "xxx",
                                "city": "xxx",
                                "district": "xxx",
                                "detailAddress": "xxx",
                                "loginInTime": 0,   // 登陆时长   
                            }
                        ],
                }
        )
    }
}