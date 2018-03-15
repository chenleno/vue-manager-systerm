
export default {
    data() {
      return {
        activeName: 'first',
        facePicPath:'',
        tableData:[],
        consumeList:[],
        loginList:[],
        faceList:[],
        baseInfoList:'',
        tags: []
      };
    },
    mounted(){
        let userId = this.$route.query.userId
        console.log(this.$route)
        this.initData(userId)
        this.getTagData();
        return userId;
    },
    created(){

    },
    methods: {
        handleClick() {

        },

        handleCurrentChange() {

        },

        orderType(row) {
            return row = row.orderType == 1 ? '贩售机订单' : '微商城订单';
        },
        loginSource (row) {
            return row = row.loginSource == 1 ? '微商城' : '贩售机';
        },
        handleClose(tagName) {
            let self = this;
            for(let i=0;i <= self.tags.length - 1; i++) {
                if(self.tags[i].name == tagName.name) {
                        this.$confirm('确认删除标签：'+ tagName.name +'吗？')
                        .then(_ => {
                            self.tags.splice(i, 1);
                        })
                        .catch(_ => {});
                    }
                }
        },
        addTabs() {
            this.$prompt('请输入标签', '添加标签', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /\S/,
                inputErrorMessage: '必须输入一个用户标签'
              }).then(({ value }) => {
                this.$message({
                  type: 'success',
                  message: '新添用户标签为: ' + value
                });

                this.tags.push({
                    name:value
                })
                console.log(this.tags);
              }).catch(() => {
                this.$message({
                  type: 'error',
                  message: '取消输入'
                });       
              });
        },

        initData (userId) {

            let self = this;

            //获取用户基础数据
            self.$axios.get('/api/udcp-base/user/userId/baseInfo', {
                // params: {
                // ID: userId
                // }
            })
            .then((response) => {
                console.log(response);
                self.baseInfoList = response.data.data;
                console.log(self.baseInfoList);

            })
            .catch((error) => {
                console.log(error);
            });

            //获取消费记录数据
            self.$axios.get('/api/udcp-base/user/userId/consumeRecord', {
                    // params: {
                    // ID: userId
                    // }
                })
                .then((response) => {
                    self.consumeList = response.data.data;

                })
                .catch((error) => {
                    console.log(error);
                });
            //获取登陆记录数据
            self.$axios.get('/api/udcp-base/user/userId/loginRecord', {
                    // params: {
                    // ID: userId
                    // }
                })
                .then((response) => {
                    self.loginList = response.data.data;

                })
                .catch((error) => {
                    console.log(error);
                });
            //获取人脸识别记录数据
            self.$axios.get('/api/udcp-base/user/userId/faceRecord', {
                    // params: {
                    // ID: userId
                    // }
                })
                .then((response) => {
                    self.facePicPath = response.data.facePicPath;
                    self.faceList = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getTagData() {
            let self = this;
                        //获取登陆记录数据
            self.$axios.get('/api/udcp-base/user/userId/userTag', {
                    // params: {
                    // ID: userId
                    // }
                })
                .then((response) => {
                    self.tags = response.data.data;

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
  };
