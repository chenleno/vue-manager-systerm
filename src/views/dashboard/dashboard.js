/**
 * Created by chenqi1 on 2018/3/6.
 */
//引入饼图组件
import aPie from 'components/dashboard/pieChart/pieChart.vue'
//引入折线图组件
import aLine from 'components/dashboard/lineChart/lineChart.vue'
//引入柱状图组件
import aBar from 'components/dashboard/barChart/barChart.vue'
//引入地图组件
import aMap from 'components/dashboard/map/map.vue'

//引入api
import * as csApi from '../../api/dashboard'

let myMixins = {
    data : function(){
        return {csApi}
    }
}


export default {

    mixins : [myMixins],        //组件混入

    components : {
        aBar,
        aPie,
        aMap,
        aLine
    },

    data : () => ({

        //数据展示
        dataObj : {
            allData : {
                "generalUser": 0,
                "orderTotalAmount": 0,
                "vipUser": 0,
                "orderCount": 0,
                "normalUser": 0,
                "device": 0
            },

            todayData : {
                "generalUser": 0,
                "orderTotalAmount": 0,
                "vipUser": 0,
                "orderCount": 0,
                "normalUser": 0,
                "device": 0
            }
        },
        //折线图相关配置
        lineObj : {
            userLineApi : '/api/udcp-base/user/userLineData',            //用户折线图api
            billingLineApi : '/api/udcp-base/goods/orderLineData',      //订单折线图api

            userLineDate : 'day',                          //用户折线图时段筛选
            billingLineDate : 'day',                       //订单折线图时段筛选

            userColorArr : [
                {
                    normal: {
                        color: '#33b46b',
                        lineStyle: {
                            color: '#33b46b',
                            width: 3
                        }
                    }
                },
                {
                    normal: {
                        color: '#fb8101',
                        lineStyle: {
                            color: '#fb8101',
                            width: 3
                        }
                    }
                },
                {
                    normal: {
                        color: '#0aa0f3',
                        lineStyle: {
                            color: '#0aa0f3',
                            width: 3
                        }
                    }
                }
            ],                          //用户折线图颜色配置
            billingColorArr : [
                {
                    normal: {
                        color: '#87dcdf',
                        lineStyle: {
                            color: '#87dcdf',
                            width: 3
                        }
                    }
                },
                {
                    normal: {
                        color: '#f97172',
                        lineStyle: {
                            color: '#f97172',
                            width: 3
                        }
                    }
                }
            ]                        //订单折线图颜色配置
        },
        //饼图相关配置
        pieObj : {
            customerApi : '/api/udcp-base/user/ratio',                  //消费用户比例api
            payWayApi : '/api/udcp-base/payment/ratio',                    //支付偏好api
            DCApi : '/api/udcp-base/sales/mode/ratio'                         //渠道销量占比api
        },
        //柱状图配置
        barObj : {
            barApi : '/api/udcp-base/base/social'
        },
        //畅销榜
        rankObj : {
            VEMData : '',
            shopData : '',
            topVEM : '',
            //时间筛选
            //贩售机商品
            VEMdate : 'day',
            //微信商城
            shopDate : 'day',
            //top贩售机
            topVEMdate : 'day'
        },
        //地图
        mapObj : {
            mapData : []
        },
        //excel下载路径
        downloadUrl : '/api/udcp-base/user/distribution/excel/xlsx',

        dataWidth : ''

    }),
    created(){
        this.getBaseData()
        this.getVEMdata('day')
        this.getShopData('day')
        this.getTopVEM('day')
        this.getMapData()

    },
    mounted(){
        this.dataWidth = this.getWidth()
        const self = this                                           //此处必须定义一个变量接受this，否则下文的数据绑定会出错
        window.onresize = function temp() {                         //监听窗口变化
            self.dataWidth = self.getWidth()                        //此处如果继续使用this，此this会指向window，而不是vue实例
        };
    },
    computed : {
        //获取新增用户数量
        getTodayUser : function(){
            return this.dataObj.todayData.generalUser + this.dataObj.todayData.normalUser + this.dataObj.todayData.vipUser
        },
        //获取总用户数量
        getAllUser : function(){
            return this.dataObj.allData.generalUser + this.dataObj.allData.normalUser + this.dataObj.allData.vipUser
        }
    },

    methods :  {
        //获取宽度
        getWidth (){
            var dom = document.getElementsByClassName('dataCard')[0]
            var width = window.getComputedStyle(dom).width
            var str = width.substring(0,width.length-2)
            str = parseInt(str) + 17
            return str.toString()
        },
        //获取数据
        getBaseData (){
            let self = this

            csApi.getBaseData.r('aaa').then(res => {
                if (res.data.code == '200') {
                    self.dataObj.allData = res.data.data.allData
                    self.dataObj.todayData = res.data.data.todayData
                } else {

                }
            }).catch(error => {
                console.log(error)
            })



            //self.$axios.get('/api/udcp-base/base').then(res => {
            //
            //    if (res.data.code == '200') {
            //        self.dataObj.allData = res.data.data.allData
            //        self.dataObj.todayData = res.data.data.todayData
            //    } else {
            //
            //    }
            //}).catch(error => {
            //    console.log(error)
            //})
        },
        //获取畅销商品top10
        getVEMdata (date){
            let self = this

            csApi.getTopData.r('offline',{timeSlice:date}).then(res => {
                if (res.data.code == '200') {
                    self.dataObj.allData = res.data.data.allData
                    self.dataObj.todayData = res.data.data.todayData
                } else {

                }
            }).catch(error => {
                console.log(error)
            })


            //self.$axios.get('/api/udcp-base/goods/top10/offline',{
            //    params : {
            //        timeSlice : date
            //    }
            //}).then(res => {
            //    if (res.data.code == '200') {
            //        self.rankObj.VEMData = res.data.data
            //    } else {
            //
            //    }
            //}).catch(error => {
            //    console.log(error)
            //})
        },
        //获取微商城商品top10
        getShopData (date){
            let self = this
            self.$axios.get('/api/udcp-base/goods/top10/wechat',{
                params: {
                    timeSlice : date
                }
            }).then(res => {
                if (res.data.code == '200') {
                    self.rankObj.shopData = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //获取终端top10
        getTopVEM (date){
            let self = this
            self.$axios.get('/api/udcp-base/goods/top10/everyTerminal',{
                params : {
                    timeSlice : date
                }
            }).then(res => {
                if (res.data.code == '200') {
                    self.rankObj.topVEM = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //获取地图信息
        getMapData (){
            let self = this
            self.$axios.get('/api/udcp-base/user/distribution').then(res => {
                if (res.data.code == '200') {
                    self.mapObj.mapData = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        }
    }





}
