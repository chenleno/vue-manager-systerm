<template>
    <div class="userManager">
        <div style="width: 100%">
            <div class="fl mr30">
                <el-select v-model="selectType"  class="selectType">
                    <el-option
                        v-for="item in selectTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-input
                    v-model="inputTypeValue"
                    class="inputType input"
                    clearable>
                </el-input>
            </div>

            <div class="fl mr30">
                <span class="demonstration">地址:</span>
                <el-cascader
                    expand-trigger="hover"
                    :options="cityOptions"
                    v-model="selectedOptionCity"
                    style="width: 270px;margin-right: 6px"
                    @change="handleChange">
                </el-cascader>
                <el-input
                    v-model="inputAddress"
                    class="inputType input"
                    clearable>
                </el-input>
            </div>

            <div class="fl mr30">
                <label>注册渠道:</label>
                <el-select v-model="registerValue" style="width: 88px">
                    <el-option
                        v-for="item in registerOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="fl mr30">
                <label>注册时间:</label>
                <el-date-picker
                    v-model="inputDate"
                    type="daterange"
                    range-separator="到"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>


            <div class="fl color mr30">
                <label>年龄</label>
                <el-select v-model="age1" placeholder="全部" style="width: 80px">
                    <el-option
                        v-for="item in userAge"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                &nbsp;
                至
                &nbsp;
                <el-select v-model="age2" placeholder="全部" style="width: 80px">
                    <el-option
                        v-for="item in userAge"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div class="fl color mr30">
                <label>用户类型</label>
                <el-select v-model="userTypeValue" placeholder="全部" style="width: 105px">
                    <el-option
                        v-for="item in userType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>




            <el-button type="primary" plain class="btn" @click='queryData'>搜索</el-button>

        </div>
        <div class="shadow tableInfo">
            <!--<el-scrollbar wrapClass="tableHeight" viewClass="tableWidth">-->
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="500">
                    <el-table-column
                        fixed
                        label="用户id"
                        width="180"
                    >
                        <!--@click="goInfo(123)"-->
                        <template slot-scope="obj">
                            <!--<i class="iconfont icon-bianji"></i>-->
                            <span @click="goInfo(obj.row.userId )"
                                  style="cursor: pointer">{{obj.row.userId }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="registration"
                        label="注册渠道"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="loginRecently"
                        label="最近登陆"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="loginRecentlyMode"
                        label="最近登陆来源"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        label="最近消费金额"
                        width="180">
                        <template slot-scope="obj">
                            <span>￥{{obj.row.lastMonetary}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="originId"
                        label="原始id"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="nickName"
                        label="昵称"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        label="性别"
                        width="180">
                        <template slot-scope="obj">
                            <span>{{obj.row.sex == 'male' ? '男' : obj.row.sex == 'famale' ? '女' : '未知'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="telephone"
                        label="手机"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="userType"
                        label="用户类型"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        label="账户余额"
                        width="180">
                        <template slot-scope="obj">
                            <span>￥{{obj.row.balance}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userLevel"
                        label="用户等级"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="userExp"
                        label="积分"
                        width="180">
                    </el-table-column>
                    <el-table-column
                    prop="logonTimeStamp"
                    label="注册时间"
                    width="180">
                    </el-table-column>
                    <el-table-column
                        prop="wechat"
                        label="微信"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="alipay"
                        label="支付宝"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="countOfLogin"
                        label="登录次数"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        label="消费总额"
                        width="180">
                        <template slot-scope="obj">
                            <span>￥{{obj.row.totalMonetary}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="countOfConsume"
                        label="消费次数"
                        width="180">
                    </el-table-column>
                </el-table>
            <!--</el-scrollbar>-->

            <div class="pagination">
                <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :page-size="20"
                    layout="total, prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6" src='./userManager.js'>

</script>

<style lang="less" type="text/less" src='./userManager.less'>

</style>
