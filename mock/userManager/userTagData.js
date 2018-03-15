module.exports = {
    api: '/api/udcp-base/user/userId/userTag',
    response: function (req, res) {

        res.send(
            {
                "data":[
                    {"name":"标签1"},	
                    {"name":"标签12"},
                    {"name":"标签123"}
                   ],
                "code": "200",
                "message": "success"
               }
        )
    }
}