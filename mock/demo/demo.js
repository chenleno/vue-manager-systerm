/**
 * Created by chenqi1 on 2018/3/5.
 */
module.exports = {
    api: '/demo',
    response: function (req, res) {

        let data = [];
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
            data.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }

        res.send(
            {"success":true,"message":"code is ok","data":data}
        )
    }
}
