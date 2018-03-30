
export default {
    data() {
        return {
            activeName: 'first',
            facePicPath: '',
            tableData: [],
            consumeList: [],
            loginList: [],
            faceList: [],
            baseInfoList: '',
            tags: [],
            featureValue: '',
            userId: '',

            pageSize:20,
            
            consumeCurrentPage:1,
            consumeTotalCount: 0,

            loginTotalCount:0,
            loginCurrentPage:1,

            faceTotalCount:0,
            faceCurrentPage:1
        };
    },
    mounted() {
        let userId = this.$route.query.userId
        this.userId = userId
        console.log(this.$route)
        this.initData(userId)
        this.getTagData(userId);
        this.consumeRecord(userId);
        this.loginRecord(userId);
        this.faceRecord(userId);
        return userId;
    },
    created() {

    },
    methods: {
        handleClick() {

        },

        handleCurrentChange() {

        },

        consumeHandleCurrentChange(consumeCurrentPage) {
            this.consumeRecord(this.userId,consumeCurrentPage);
        },
        loginHandleCurrentChange(loginCurrentPage) {
            this.loginRecord(this.userId,loginCurrentPage);
        },
        faceHandleCurrentChange(faceCurrentPage) {
            this.faceRecord(this.userId,faceCurrentPage);
        },

        orderType(row) {
            return row = row.orderType == 1 ? '贩售机订单' : '微商城订单';
        },
        loginSource(row) {
            return row = row.loginSource == 1 ? '微商城' : '贩售机';
        },
        handleClose(tagName) {
            let self = this;
            for (let i = 0; i <= self.tags.length - 1; i++) {
                if (self.tags[i].name == tagName.name) {
                    this.$confirm('确认删除标签：' + tagName.name + '吗？')
                        .then(_ => {
                            self.tags.splice(i, 1);
                        let tagsArr = [];
                        for(let i = 0 ;i <= self.tags.length - 1; i++){
                            tagsArr.push(self.tags[i].name)
                        }
                        self.putTagData(tagsArr.join(','));
                        })
                        .catch(_ => { });
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
                self = this
                self.tags.push({
                    name: value
                })
                console.log(self.tags.length);
                let tagsArr = [];
                for(let i = 0 ;i <= self.tags.length - 1; i++){
                    tagsArr.push(self.tags[i].name)
                }
             this.$message({
                 type: 'success',
                 message: '添加成功'
             });
                self.putTagData(tagsArr.join(','));
            }).catch(() => {
                // this.$message({
                //     type: 'error',
                //     message: '取消输入'
                // });
            });
        },

        //获取消费记录数据
        consumeRecord(userId,currentPage) {
            this.$axios.get('/api/udcp-base/user/' + userId + '/consumeRecord', {
                params: {
                pageNo: currentPage,
                pageSize: this.pageSize
                }
            })
                .then((response) => {
                    this.consumeList = response.data.data;
                    this.consumeTotalCount = response.data.total;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        loginRecord(userId,currentPage) {
            //获取登陆记录数据
            this.$axios.get('/api/udcp-base/user/' + userId + '/loginRecord', {
                params: {
                    pageNo: currentPage,
                    pageSize: this.pageSize
                    }
            })
                .then((response) => {
                    this.loginList = response.data.data;
                    this.loginTotalCount = response.data.total;

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        faceRecord(userId,currentPage) {
            //获取人脸识别记录数据
            this.$axios.get('/api/udcp-base/user/' + userId + '/faceRecord', {
                params: {
                    pageNo: currentPage,
                    pageSize: this.pageSize
                    }

            })
                .then((response) => {
                    this.faceList = response.data.data;
                    this.faceTotalCount = response.data.total;
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        initData(userId) {

            let self = this;

            //获取用户基础数据
            self.$axios.get('/api/udcp-base/user/' + userId + '/baseInfo', {

            })
                .then((response) => {
                    console.log(response);
                    self.baseInfoList = response.data.data;
                    console.log(self.baseInfoList);

                })
                .catch((error) => {
                    console.log(error);
                });




            //获取人脸识别记录的特征值和照片
            self.$axios.get('/api/udcp-base/user/' + userId + '/faceInfo', {

            })
                .then((response) => {
                    self.facePicPath = 'http://kdxc.udcp.com' + response.data.data.facePicPath;
                    self.featureValue = response.data.data.featureValue;
                    console.log(self.featureValue);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getTagData(userId) {
            let self = this;
            //获取登陆记录数据
            self.$axios.get('/api/udcp-base/user/' + userId + '/userTag', {

            })
                .then((response) => {
                    self.tags = response.data.data;

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        //修改用户标签
        putTagData(tagString) {
            this.$axios.put('/api/udcp-base/user/' + this.userId + '/userTag',{
                tags:tagString
            })
                .then((response) => {
                    if(response.code == 200) {
                        // this.$message({
                        //     type: 'success',
                        //     message: '新添用户标签'
                        // });
                        getTagData(this.userId)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }
};
