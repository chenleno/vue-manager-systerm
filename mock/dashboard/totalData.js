/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/getTotalData',
    response: function (req, res) {

        res.send(
            {"success":true,
                "message":"code is ok",
                "data":[
                    {"dataName":"全部泛用户","dataNum":"567"},
                    {"dataName":"全部普通用户","dataNum":"421"},
                    {"dataName":"全部会员","dataNum":"52"},
                    {"dataName":"订单总量","dataNum":"76"},
                    {"dataName":"订单总金额","dataNum":"84"},
                    {"dataName":"点位总量","dataNum":"436"}
                ]}
        )
    }
}
