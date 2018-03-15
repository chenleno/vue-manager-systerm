/**
 * Created by chenqi1 on 2018/3/9.
 */


export default {
    data () {
        return {
            myChart:''
            //pieData:[]
        }
    },
    created(){
        this.getData('day')

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
            type:String
        },
        width : {
            type:String,
            default : '100%'
        },
        height : {
            type:String,
            default : '300px'
        },
        colorarray : {
            type:Array
        },
        timeSlice : {
            type : String

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
    watch : {
      'timeSlice' : function( newVal , oldVal ){
            if(newVal){
                this.getData(newVal)
            }
      }
    },
    methods: {
        drawLine(data , Xdate){
            const self = this

            // 基于准备好的dom，初始化echarts实例
            this.myChart = self.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            this.myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    //data:this.typearray,
                    x: 'left',
                    y: 'top',
                    padding: [10, 20]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                //toolbox: {
                //    feature: {
                //        saveAsImage: {}
                //    }
                //},
                xAxis: {
                    //type: 'category',
                    boundaryGap: false,
                    data: Xdate
                },
                yAxis: {
                    type: 'value'
                },
                series:data
            });
            window.addEventListener('resize' , this.myChart.resize)  //图表响应式重绘
        },
        getData ( val ){
            this.$axios.get(this.api,{
                params: {
                    timeSlice : val
                }
            }).then(res => {
                if (res.data.success == '200') {
                    this.Xdate = res.data.data.date
                    this.lineData = res.data.data.lineData

                    var finalData = this.dataToEcharts(this.lineData , this.colorarray)

                    this.drawLine(finalData , this.Xdate)  //对this.lineData作对应的echarts处理
                } else {

                }
            }).catch(error => {
                console.log(error)
            })
        },
        dataToEcharts (arr , colorArr){
            arr.forEach((item,index) => {
                item.type='line'
                item.itemStyle = colorArr[index]

            })
            return arr
        }
    }
}
