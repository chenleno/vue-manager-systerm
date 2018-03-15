/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/barData',
    response: function (req, res) {

        res.send(
            {"success":"200",
                "message":"code is ok",
                "data":[
                    {value:231, name:'微信'},
                    {value:654, name:'微博'}
                ]}
        )
    }
}
