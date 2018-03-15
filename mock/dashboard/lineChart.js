/**
 * Created by chenqi1 on 2018/3/9.
 */
module.exports = {
    api: '/api/lineChartData',
    response: function (req, res) {

        res.send(
            {   "success": "200",
                "message":"success",
                "data":{
                    date : ['周一','周二','周三','周四','周五','周六','周日'],
                    lineData:[
                        {
                            name:'泛用户',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'普通用户',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'会员增长',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        }
                    ]
                }}
        )
    }
}
