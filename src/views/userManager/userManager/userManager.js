import cityJson from '../../../../static/city'
import service from '../../../tools/service/commonService'

export default {
    data() {
        return {
            tableData: [],
            //用户信息
            selectType:"1",
            selectTypeOptions:[{
                value:'1',
                label:'用户ID'
            },{
                value:'2',
                label:'昵称'
            },{
                value:'3',
                label:'手机'
            },{
                value:'4',
                label:'微信'
            },{
                value:'5',
                label:'支付宝'
            }],
            registerOptions: [{
                value: '1',
                label: '贩售机'
            }],
            inputTypeValue:'',
            inputDate:'',
            district:'',
            cityOptions: cityJson.data,
            registerValue: '1',
            inputId: '',
            userType:[{
                value:'',
                label:'全部'
            },{
                value:'泛用户',
                label:'泛用户'
            },{
                value:'会员',
                label:'会员'
            },{
                value:'普通用户',
                label:'普通用户'
            }],
            userTypeValue:'',
            selectedOptionCity:[],
            //年龄
            userAge:[{value:'',label:'全部'}],
            age1:'',
            age2:'',
            //分页相关
            cur_page: 1,
            pageSize: 20,
            total:1,
            //请求体内容
            postParams : {
            }
            // userId  : '' ,//   用户ID
            // registration  : '', //  注册模式
            // nickName :'', //   昵称
            // ageStart :'',//   年龄段开始
            // ageEndding : '',//年龄段结束
            // telephone  : '',//手机号码
            // userType  : '',// 用户类型
            // logonStart :'',// 注册日志开始      yyyy-MM-dd HH:mm:ss
            // logonEndding  :'',//  注册日期结束      yyyy-MM-dd HH:mm:ss
            // wechat  : '',//   微信号
            // alipay  : '', //    支付宝账号
            // bigArea  : '',//   所在大区
            // province : '',//   所在省份
            // city    : '',//   所在城市
            // area   :''//     所在区
            //district:所在地址
        }
    },
    mounted(){
      this.querySelect({},this.cur_page , this.pageSize);
      // this.getCity();
      this.ageOptions();
    },
    methods:{
        //选择按钮点击函数
        queryData : function () {
            // console.log(this.inputDate)
            this.postParams = {}
            let params = this.postParams
            if(this.inputTypeValue != ''){
                switch (this.selectType){
                    case '1' : params.userId = this.inputTypeValue
                            break;
                    case '2' : params.nickName = this.inputTypeValue
                        break;
                    case '3' : params.telephone = this.inputTypeValue
                        break;
                    case '4' : params.wechat = this.inputTypeValue
                        break;
                    case '5' : params.alipay = this.inputTypeValue
                        break;
                }
            }

            //判断地区
            if( this.selectedOptionCity.length > 1){
                params.province = this.selectedOptionCity[0];
                params.city = this.selectedOptionCity[1];
                params.area = this.selectedOptionCity[2];
            }
            if( this.district != ''){
                params.addressDetails = this.district
            }

            //判断时间  formatDate
            if(this.inputDate){
                if(this.inputDate.length > 1){
                    let data = this.inputDate
                    let time1 = service.formatDate(data[0]) + ' ' + '00:00:00';
                    let time2 = service.formatDate(data[1]) + ' ' + '00:00:00';
                    params.logonStart = time1
                    params.logonEndding  = time2
                }
            }

            //判断年龄
            if(this.age1 != ''){
                params.ageStart = this.age1
            }
            if(this.age2 != ''){
                params.ageEndding = this.age2
            }
            //判断类型 // userType  : '',// 用户类型
            if( this.userTypeValue != ''){
                params.userType = this.userTypeValue
            }
            // console.log(params)
            this.querySelect(params,this.cur_page , this.pageSize);
        },
        handleChange : function () {
            console.log(this.selectedOptionCity)
        },
        goInfo : function (id) {
            // this.$store.commit('data',[{name:'childUserId',value:id}])
            this.$router.push( {path:'/userInfo' , query:{userId:id}})
            // this.$router.push('/userInfo/id='+id)

        },
        //默认查全部的
        // query : function (pageNo,pageSize) {
        //     let self = this;
        //     self.$axios.get( '/api/udcp-base/users?' , {
        //         params : {
        //             pageNo : pageNo,
        //             pageSize : pageSize
        //         }
        //     })
        //     .then( res => {
        //         self.tableData = res.data.data
        //     })
        // },
        //查询有筛选项的
        querySelect : function (obj,pageNo,pageSize) {
            let self = this;
            self.$axios.post( '/api/udcp-base/users?' ,obj,{
                params : {
                    pageNo : pageNo,
                    pageSize : pageSize
                }
            })
            .then( res => {
                self.tableData = res.data.data
                self.total = res.data.total
            })
        },
        handleCurrentChange(val){
            // console.log(val)
            let pageSize = this.pageSize

            this.cur_page = val;
            // this.query(val,pageSize);
            this.querySelect(this.params,val,pageSize)
        },
        //获取city
        // getCity : function () {
        //     let self = this;
        //     self.$axios.get('/city')
        //         .then(res => {
        //             self.cityOptions = res.data.data
        //             console.log(res)
        //             var res = res.data.data
        //             for(var i = 0; i< res.length; i++){
        //                 res[i].value = res[i].label;
        //                 for( var n = 0; n < res[i].children.length; n++){
        //                     res[i].children[n].value = res[i].children[n].label
        //                     for(var m = 0; m < res[i].children[n].children.length; m++){
        //                         var a = res[i].children[n].children[m]
        //                         a.value = a.label
        //                     }
        //                 }
        //             }
        //             console.log(res)
        //             self.textarea = JSON.stringify(res)
        //
        //         })
        // },
        //初始化年龄的options
        ageOptions:function () {
            let i = 10;
            for(;i < 80; i++){
                this.userAge.push({
                    value:i,
                    label:i
                })
            }
        }
    }
}
