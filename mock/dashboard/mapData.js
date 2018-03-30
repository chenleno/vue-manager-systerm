/**
 * Created by chenqi1 on 2018/3/6.
 */
module.exports = {
    api: '/api/udcp-base/user/distribution',
    response: function (req, res) {

        function randomValue() {
            return Math.round(Math.random()*1000);
        }

        res.send(
            {"code":'200',
                "message":"code is ok",
                "data":[
                    {name: '北京', value:250 , percent:'10%'},
                    {name: '天津', value:250 , percent:'10%'},
                    {name: '上海', value:250 , percent:'10%'},
                    {name: '重庆', value:250 , percent:'10%'},
                    {name: '河北', value:250 , percent:'10%'},
                    {name: '河南', value:250 , percent:'10%'},
                    {name: '云南', value:250 , percent:'10%'},
                    {name: '辽宁', value:250 , percent:'10%'},
                    //{name: '黑龙江',value:randomValue()},
                    //{name: '湖南', value:randomValue()},
                    //{name: '安徽', value:randomValue()},
                    //{name: '山东', value:randomValue()},
                    //{name: '新疆', value:randomValue()},
                    //{name: '江苏', value:randomValue()},
                    //{name: '浙江', value:randomValue()},
                    //{name: '江西', value:randomValue()},
                    //{name: '湖北', value:randomValue()},
                    //{name: '广西', value:randomValue()},
                    //{name: '甘肃', value:randomValue()},
                    //{name: '山西', value:randomValue()},
                    //{name: '内蒙古',value:randomValue()},
                    //{name: '陕西', value:randomValue()},
                    //{name: '吉林', value:randomValue()},
                    //{name: '福建', value:randomValue()},
                    //{name: '贵州', value:randomValue()},
                    //{name: '广东', value:randomValue()},
                    //{name: '青海', value:randomValue()},
                    //{name: '西藏', value:randomValue()},
                    //{name: '四川', value:randomValue()},
                    //{name: '宁夏', value:randomValue()},
                    //{name: '海南', value:randomValue()},
                    //{name: '台湾', value:randomValue()},
                    //{name: '香港', value:randomValue()},
                    //{name: '澳门', value:randomValue()}
                ]}
        )
    }
}
