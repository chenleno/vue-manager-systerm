/**
 * Created by chenqi1 on 2018/3/7.
 */
////引入基本模板
//let echarts = require('echarts/lib/echarts')
////引入柱状图组件
//require('echarts/lib/chart/bar')
////引入提示框和title
//require('echarts/lib/component/tooltip')
//require('echarts/lib/component/title')

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',

            myChart:'',
            pieData:[]
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
            type:Number
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
        drawLine(data){
            const self = this

            // 基于准备好的dom，初始化echarts实例
            this.myChart = self.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            this.myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["微信","微博"],
                    nameTextStyle : {
                        fontSize:12
                    }
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: data
                }]
            });
            window.addEventListener('resize' , this.myChart.resize)  //图表响应式重绘
        },
        getData (){
            this.$axios.get('/api/pieData').then(res => {
                if (res.data.success) {
                    this.pieData = res.data.data

                    this.drawLine(this.pieData)
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        }

    }
}
