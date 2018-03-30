/**
 * Created by chenqi1 on 2018/3/12.
 */

export default {
    data () {
        return {
            myChart:'',
            barData:''
        }
    },
    created(){
        this.getData()

    },
    mounted(){
        //this.drawLine();

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
        api: {

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
        drawLine(xData , yData){
            const self = this

            // 基于准备好的dom，初始化echarts实例
            this.myChart = self.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            this.myChart.setOption({
                //title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: xData,
                    nameTextStyle : {
                        fontSize:14
                    }
                },
                yAxis: {},
                series: [{
                    name: '',
                    type: 'bar',
                    data: yData,
                    barMaxWidth:60,
                    itemStyle: {
                        //通常情况下：
                        normal:{
                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            color: function (params){
                                var colorList = ['#34bc84' , '#ff8201'];
                                return colorList[params.dataIndex];
                            }
                        },
                        //鼠标悬停时：
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
            window.addEventListener('resize' , this.myChart.resize)  //图表响应式重绘
        },
        getData (){
            let self = this

            self.$axios.get(this.api).then(res => {
                if (res.data.code == '200') {
                    self.barData = res.data.data

                    var obj = self.dataToEcharts(this.barData)

                    self.drawLine(obj.xAxisArr , obj.yDataArr)
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        dataToEcharts(data){
            var obj = {
                xAxisArr : [],
                yDataArr : []
            }
            data.forEach(item=>{
                obj.xAxisArr.push(item.name)
                obj.yDataArr.push(item.value)
            })
            return obj
        }

    }
}
