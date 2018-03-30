/**
 * Created by chenqi1 on 2018/3/8.
 */

import chinaJson from './../../../../static/china.json'

export default {

    name: 'chartMap',
    data () {
        return {
            myChart:'',
            maxRange : 0
        }
    },
    created(){
        //this.getData()

    },
    mounted(){

        this.$echarts.registerMap('china' , chinaJson)   //注册城市json

        this.getData();

    },
    beforeDestroy () {
        window.removeEventListener('resize', this.myChart.resize)
        if (this.myChart) {
            this.myChart.dispose(); // 销毁图表实例
        }
    },
    props : {
        id: {
            type: String,
            default: function () {   // 生成一个随机字符串,纯英文的,当不传入ID的时候生成实例,加i确保不会随机到一样的
                let temp = []
                for (let i = 0; i < 6; i++) {
                    let randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 19) + i)
                    temp.push(randomChar)
                }
                return temp.reduce((pre, next) => pre + next)
            }
        },
        width : {
            type:String,
            default : '100%'
        },
        height : {
            type:String,
            default : '300px'
        },
        dispose : Boolean

    },
    computed : {
        style(){
            return {
                height: this.height,
                width: this.width
            }
        }
    },
    methods: {

        //convertData(data) {
        //    var res = [];
        //    for (var i = 0; i < data.length; i++) {
        //        var geoCoord = geoCoordMap[data[i].name];
        //        if (geoCoord) {
        //            res.push({
        //                name: data[i].name,
        //                value: geoCoord.concat(data[i].value)
        //            });
        //        }
        //    }
        //    return res;
        //},



        drawMap(data){
            const self = this

            // 基于准备好的dom，初始化echarts实例
            this.myChart = self.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            this.myChart.setOption({
                tooltip: {},
                visualMap: {
                    min: 0,
                    max: this.getMax(this.mapData),                 //以当前数据的最大value值为maxRange
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'],
                    //seriesIndex: [1],
                    inRange: {
                        color: ['#eef4f1', '#34bc84']
                    },
                    calculable : true
                },
                geo: {
                    map: 'china',
                    roam: true,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: 'rgba(0,0,0,0.4)'
                            }
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff'
                        //areaColor: 'rgba(233,214,123)'

                    },
                    emphasis:{
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                series : [
                    {
                        //name: 'categoryA',
                        type: 'map',
                        geoIndex: 0,
                        tooltip: {
                            trigger : 'item',
                            formatter :
                                function(params){
                                var res = params.name+'<br/>' + '会员数量：' + params.data.value + '<br/>' + '占比：' + params.data.percent
                                return res;
                            }
                        },
                        //itemStyle: {
                        //    normal: {
                        //        areaColor: '#ffdf33',
                        //        borderColor: '#fff',
                        //        borderWidth: '2',
                        //        label: {
                        //            show: false
                        //        }
                        //    },
                        //    emphasis: {
                        //        areaColor: '#ffdf33'
                        //    }
                        //},


                        data:data,
                    }
                ]
            });
            window.addEventListener('resize' , this.myChart.resize)  //图表响应式重绘
        },
        getData (){
            this.$axios.get('/api/udcp-base/user/distribution').then(res => {
                if (res.data.code == '200') {
                    this.mapData = res.data.data

                    this.drawMap(this.mapData)
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        //获取数组最大值
        getMax (obj) {
            let valueArr = []
            obj.forEach(item => {
                valueArr.push(item.value)
            })
            return Math.max.apply( Math, valueArr );
        }
    }


}
