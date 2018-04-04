/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/udcp-base/base/cs/sc',
    response: function (req, res) {

        res.send(
            {
                "code": '200',
                "message": "code is ok",
                "data": {
                    "todayData": {
                        "generalUser": 1,
                        "normalUser": 2,
                        "vipUser": 3,
                        "orderCount": 11,
                        "orderTotalAmount": 1100,
                        "device": 10
                    }, "allData": {
                        "generalUser": 1,
                        "normalUser": 2,
                        "vipUser": 3,
                        "orderCount": 11,
                        "orderTotalAmount": 1100,
                        "device": 10
                    }
                }
            }
        )
    }
}
