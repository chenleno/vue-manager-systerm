/**
 * Created by chenqi1 on 2018/3/29.
 */

module.exports = {
    api: '/access',
    response: function (req, res) {
        res.send(
            {
                "code": '200', "message": "code is ok", "data": [
                {
                    "id": "cba62955646c4a489e2ca1442c786270",
                    "name": "获取基础数据",
                    "summary": null,
                    "url": "/base/cs/sc/",
                    "method": "GET"
                },
                {
                    "id": "daweqeqeqwrerettewrewrew",
                    "name": "获取top10数据",
                    "summary": null,
                    "url": "/goods/**",
                    "method": "GET"
                },
                {
                    "id": "4028811a5e1820d9015e1824acf20000",
                    "name": "获取权限",
                    "summary": null,
                    "url": "/signin",
                    "method": "GET"
                }
            ]
            }
        )
    }
}




