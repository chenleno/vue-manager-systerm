/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/kdxc-udcp-base/goods/top10/everyTerminal',
    response: function (req, res) {

        res.send(
            {"success":'200',
                "message":"code is ok",
                "data":[
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"567"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"421"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"52"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"76"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"84"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"436"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"436"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"436"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"436"},
                    {"dataName":"光明纯牛奶330ml","price":"12","dataNum":"436"}
                ]}
        )
    }
}
