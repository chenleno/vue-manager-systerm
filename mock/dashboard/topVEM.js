/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/udcp-base/goods/offline',
    response: function (req, res) {

        res.send(
            {"code":'200',
                "message":"code is ok",
                "data":[
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"567"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"421"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"52"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"76"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"84"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"436"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"436"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"436"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"436"},
                    {"dataName":"FF00012","locaton":"北京 朝阳区","price":"12","dataNum":"436"}
                ]}
        )
    }
}
