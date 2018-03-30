/**
 * Created by chenqi1 on 2018/3/7.
 */
//引入基本模板
//let echarts = require('echarts/lib/echarts')
//引入柱状图组件
//require('echarts/lib/chart/pie')
//引入提示框和title
//require('echarts/lib/component/tooltip')
//require('echarts/lib/component/title')

export default {
    data () {
        return {
            myChart: '', // 保存地图初始化的实例
            myData : ''
        }
    },
    created (){
      this.getData()
    },
    mounted(){

    },
    beforeDestroy () {
        window.removeEventListener('resize',this.myChart.resize)
        if (this.myChart) {
            this.myChart.dispose(); // 销毁图表实例
        }
    },
    props: {
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
        api : {
            type:String,
        },
        height: {
            type: String,
            default: '300px'
        },
        width: {
            type: String,
            default: '100%'
        },
        dispose : Boolean

    },

    computed: {
        style(){
            return {
                height: this.height,
                width: this.width
            }
        }
    },

    methods: {
        drawLine(data){
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById(this.id))
            // 绘制图表
            this.myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    show : false
                    //orient: 'vertical',
                    //x: 'left',
                    //data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['35%', '55%'],
                        itemStyle : {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        labelLine:{
                            normal:{
                               length:5
                            }
                        },
                        label: {
                            normal: {
                                //formatter: ' {b|{b}：}{per|{d}%}\n {c}',
                                formatter: ' {b|{b}}\n{per|{d}%}',
                                //backgroundColor: '#eee',
                                //borderColor: '#aaa',
                                //borderWidth: 1,
                                //borderRadius: 4,
                                rich: {

                                    b: {
                                        fontSize: 14,
                                        //lineHeight: 33
                                    },
                                    per: {
                                        fontSize: 14,
                                        //color: '#eee',
                                        //backgroundColor: '#334455',
                                        //padding: [2, 4],
                                        //borderRadius: 2
                                    }
                                }
                            }
                        },
                        data: data
                    }
                ],
                color:['#ff8201' , '#34bc84' , '#87dcdf' , '#f97172']
            });
            window.addEventListener('resize' , this.myChart.resize)  //图表响应式重绘
        },
        getData (){
            this.$axios.get(this.api).then(res=>{
                if (res.data.code == '200') {
                    this.myData = res.data.data

                    this.drawLine( this.dataFilter(this.myData) )
                } else {

                }
            })
        },
        //去除饼图数据中的0%
        dataFilter (arr){
            arr.forEach((item , index) => {
                if(item.value === 0) {
                    arr.splice(index , 1)
                }
            })
            return arr
        }
    }
}
