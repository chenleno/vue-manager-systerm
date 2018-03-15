module.exports = {
    api: '/api/udcp-base/user/userId/faceRecord',
    response: function (req, res) {

        res.send(
            {
                "success": true,
                "message": "code is ok",
                    "data": [
                        {

                            "faceRecTime": "2018-01-01 11:00:00", //识别时间
                            "deviceId": "xxx",
                            "province": "xxx",
                            "city": "xxx",
                            "district": "xxx",
                            "detailAddress": "xxx",
                            "behavior": 1   //行为用途（1：登陆，2：支付）

                        },
                        {
                            "faceRecTime": "2018-01-01 11:00:00", //识别时间
                            "deviceId": "xxx",
                            "province": "xxx",
                            "city": "xxx",
                            "district": "xxx",
                            "detailAddress": "xxx",
                            "behavior": 1   //行为用途（1：登陆，2：支付）
                        },
                        {
                            "faceRecTime": "2018-01-01 11:00:00", //识别时间
                            "deviceId": "xxx",
                            "province": "xxx",
                            "city": "xxx",
                            "district": "xxx",
                            "detailAddress": "xxx",
                            "behavior": 1   //行为用途（1：登陆，2：支付）
                        }]
                }
        )
    }
}