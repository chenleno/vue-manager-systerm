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


import host from 'tools/service/commonService.js'



export default {

    components : {
        aBar,
        aPie,
        aMap,
        aLine
    },

    data : () => ({
        //数据展示
        dataObj : {
            allData : {},
            todayData : {}
        },
        //折线图相关配置
        lineObj : {
            userLineApi : '/api/udcp-base/user/userLineData',            //用户折线图api
            billingLineApi : '/api/kdxc-udcp-base/goods/orderLineData',      //订单折线图api

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
        }
    }),

    created(){
        this.getBaseData()
        this.getVEMdata('day')
        this.getShopData('day')
        this.getTopVEM('day')
        this.getMapData()
    },
    computed : {
        getTodayUser : function(){
            return this.dataObj.todayData.generalUser + this.dataObj.todayData.normalUser + this.dataObj.todayData.vipUser
        },
        getAllUser : function(){
            return this.dataObj.allData.generalUser + this.dataObj.allData.normalUser + this.dataObj.allData.vipUser
        },
        downloadUrl : function(){
            return host.hostUrl + '/api/udcp-base/user/distribution/excel/xlsx'
        }
    },

    methods :  {

        //获取数据
        getBaseData (){
            this.$axios.get('/api/udcp-base/base').then(res => {
                if (res.data.success == '200') {
                    this.dataObj.allData = res.data.data.allData
                    this.dataObj.todayData = res.data.data.todayData
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //rank获取VEM
        getVEMdata (date){
            this.$axios.get('/api/kdxc-udcp-base/goods/top10/everyTerminal',{
                params : {
                    timeSlice : date
                }
            }).then(res => {
                if (res.data.success == '200') {
                    this.rankObj.VEMData = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //rank获取shop
        getShopData (date){
            this.$axios.get('/api/kdxc-udcp-base/goods/top10/wechat',{
                params: {
                    timeSlice : date
                }
            }).then(res => {
                if (res.data.success == '200') {
                    this.rankObj.shopData = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //rank获取topVEM
        getTopVEM (date){
            this.$axios.get('/api/kdxc-udcp-base/goods/top10/offline',{
                params : {
                    timeSlice : date
                }
            }).then(res => {
                if (res.data.success == '200') {
                    this.rankObj.topVEM = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //获取地图信息
        getMapData (){
            this.$axios.get('/api/udcp-base/user/distribution').then(res => {
                if (res.data.success == '200') {
                    this.mapObj.mapData = res.data.data
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        }

    }





}
