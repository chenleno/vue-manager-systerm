/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/pieData',
    response: function (req, res) {

        res.send(
            {"success":"200",
                "message":"code is ok",
                "data":[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'}

                ]}
        )
    }
}
