<template>
<div class="userInfo">
    <router-link to="/userManager"><i class="el-icon-arrow-left" style="color:#34bc84;font-size:20px;"></i></router-link>
    <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane label="基本资料" name="first">
        <div class="mainFirst">
            <div class="userInfo">
                <h3 class="title">基本资料</h3>
                <p class="titleInfo">注册时间: {{baseInfoList.registerTime}} &nbsp;&nbsp;&nbsp;&nbsp;   注册渠道：{{baseInfoList.registerSource | registerSourceFilter }}</p>
                <div class="mainInfo">
                    <div class="leftImg" v-if="baseInfoList.gender == 1">
                        <img src="./man.png"/>
                    </div>
                    <div class="leftImg" v-else>
                        <img src="./woman.png"/>
                    </div>
                    <div class="rightInfo">
                        <div class="left">
                            <label for=""><span  class="labelName">用户ID:</span> <span> {{baseInfoList.userId}}</span></label> 
                            <label for=""><span  class="labelName">昵称: </span><span> {{baseInfoList.nickname}}</span></label> 
                            <label for=""><span  class="labelName">性别: </span><span> {{baseInfoList.gender | genderFilter}}</span></label> 
                            <label for=""><span  class="labelName">年龄: </span><span> {{baseInfoList.age}}</span></label> 
                        </div>
                        <div class="right">
                            <label for=""><span  class="labelName">账户余额:</span> <span> 主钱包:&yen;{{baseInfoList.mainWallet}}&nbsp;&nbsp;&nbsp;&nbsp;副帐号:&yen;{{baseInfoList.viceWallet}}</span></label> 
                            <label for=""><span  class="labelName">用户类型:</span> <span> {{baseInfoList.userType | userTypeFilter}}</span></label> 
                            <label for=""><span  class="labelName">积分:</span> <span> {{baseInfoList.score}}</span></label> 
                            <label for=""><span  class="labelName">用户等级:</span> <span> </span></label> 
                            
                        </div>
                    </div>
                </div>
            </div>
        <!-- <el-card > -->
            <div class="tag">
                <div class="tagTitle">
                    <span style="font-size:14px;color:#545655;">用户标签</span>
                    <el-button style="float: right;color:#aeaeae;font-size:14px;" type="" @click="addTabs">添加标签</el-button>
                </div>
                <el-tag
                    v-for="tag in tags"
                    :key="tag.name"
                    closable @close="handleClose(tag)"
                    style="margin-right:12px;color:#aeaeae;border: 1px solid #dcdfe6;background:#fff;border-radios:2px;"
                    :type="tag.type" >
                    {{tag.name}}
                </el-tag>
            </div>


            <div class="userInfo" style="padding-top:20px;">
                <h3 class="title">通讯信息</h3>
                <div class="mainInfo">
                    <div class="rightInfo">
                        <div class="left">
                            <label for=""><span  class="labelName">手机:</span> <span> {{baseInfoList.mobile}}</span></label> 
                            <label for=""><span  class="labelName">微信: </span><span> {{baseInfoList.wechatAccount}}</span></label> 
                        </div>
                        <div class="right">
                            <label for=""><span  class="labelName">支付宝:</span> <span>{{baseInfoList.alipayAccount}}</span></label> 
                            <label for=""><span  class="labelName">地址:</span> <span> {{baseInfoList.province}} {{baseInfoList.city}} {{baseInfoList.district}} {{baseInfoList.detailAddress}}</span></label> 
                        </div>
                    </div>
                </div>
            </div>
        <!-- </el-card> -->

     
        </div>

        </el-tab-pane>

        <!--消费记录-->
        <el-tab-pane :label="'消费记录('+consumeList.length+')'" name="second">
            <div class="shadow tableInfo">
                <el-table
                    :data="consumeList"
                    style="width: 100%">
                    <el-table-column
                        prop="createTime"
                        label="订单时间"
                        width="">
                    </el-table-column>
                    <el-table-column
                        prop="orderType"
                        label="订单类型"
                        :formatter="orderType"
                        width="">
                    </el-table-column>
                    <el-table-column
                        prop="payStatus"
                        label="支付状态">
                        <template slot-scope="scope">
                            {{scope.row.payStatus == 1 ? '待支付':scope.row.payStatus == 2 ? '支付失败' : '支付成功'}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="商品名称">
                        <template slot-scope="scope">
                            <span v-for="goods in scope.row.orderDetail">{{goods.name}} &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="amounts"
                        label="订单金额">
                    </el-table-column>
                    <el-table-column
                        prop="payWay"
                        label="支付方式">
                        <template slot-scope="scope">
                            {{scope.row.payWay | payWayFilter}}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="deviceId"
                        label="取货设备编号">
                    </el-table-column>
                    <el-table-column
                        prop="detailAddress"
                        label="设备地址">
                        <template slot-scope="scope">
                            <span> {{scope.row.province}} {{scope.row.city}} {{scope.row.district}} {{scope.row.detailAddress}} </span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-tab-pane>

        <!--登录记录-->
        <el-tab-pane :label="'登陆记录('+loginList.length+')'" name="third">
            <div class="shadow tableInfo">
                <el-table
                    :data="loginList"
                    style="width: 100%">
                    <el-table-column
                        prop="loginTime"
                        label="登录时间"
                        width="">
                    </el-table-column>
                    <el-table-column
                        prop="loginSource"
                        label="登录渠道"
                        :formatter="loginSource"
                        width="">
                    </el-table-column>
                    <el-table-column
                        prop="loginDevice"
                        label="设备编号">
                    </el-table-column>
                    <el-table-column
                        prop="detailAddress"
                        label="设备地址">
                        <template slot-scope="scope">
                            <span> {{scope.row.province}} {{scope.row.city}} {{scope.row.district}} {{scope.row.detailAddress}} </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="loginInTime"
                        label="登录时长">
                    </el-table-column>
                </el-table>

                <div class="pagination">
                    <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :page-size="10"
                        layout="total, prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>

        </el-tab-pane>
        <el-tab-pane :label="'人脸识别记录('+faceList.length+')'" name="fourth">
        <div class="mainFirst">
            <div class="userInfo" style="padding: 0 0 15px 0">
                <h3 class="title">认证照片</h3>
            </div>
            <div style="overflow:hidden;">
            <img class="pre-img" :src="facePicPath" alt="">
            <span class="superNumber">特征值：DDDSSSEEDFDDDS</span>
            </div>
            <div class="userInfo" style="padding:15px 0">
                <h3 class="title">登录记录</h3>
            </div>
        <el-table
                :data="faceList"
                style="width: 100%">
                <el-table-column
                prop="faceRecTime"
                label="识别时间"
                width="">
                </el-table-column>
                <el-table-column
                prop="deviceId"
                label="设备编号"
                width="">
                </el-table-column>
                <el-table-column
                prop="deviceAddress"
                label="设备地址">
                    <template slot-scope="scope">
                        <span> {{scope.row.province}} {{scope.row.city}} {{scope.row.district}} {{scope.row.detailAddress}} </span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="behavior"
                label="用途">
                    <template slot-scope="scope">
                        {{scope.row.behavior | behaviorFilter}}
                    </template>
                </el-table-column>
            </el-table>
        </div>
        </el-tab-pane>
    </el-tabs>
</div>


</template>

<script type="text/ecmascript-6" src='./userInfo.js'>
</script>

<style lang="less" type="text/less" src='./userInfo.less'>

</style>

