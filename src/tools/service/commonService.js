export default{

    //部署环境文件下载域名
    hostUrl : '',

    //时间验证
    formatDate : function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        y = y.toString();
        m = m.toString();
        d = d.toString();
        // return y  + m  + d;
        return y + '-' + m + '-' + d;
    },
}
