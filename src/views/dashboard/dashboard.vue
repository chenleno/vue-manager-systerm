<template>
    <!--最外层-->
    <div class="wrap">

        <button v-has="[csApi.getBaseData]" @click="getBaseData">测试按钮</button>

        <!--数据块展示-->
        <div class="showData">
            <el-row :gutter='20'>
                <el-col :span='8'>
                    <el-popover
                        ref="popover1"
                        placement="bottom"
                        trigger="hover"
                        :width='dataWidth'
                    >
                        <div class="pover_content">
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-yonghuguanli'></i> 泛用户</span>
                                <span class='poverData'>{{dataObj.todayData.generalUser}} | {{dataObj.allData.generalUser}}</span>
                            </p>
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-yonghuguanli'></i> 普通用户</span>
                                <span class='poverData'>{{dataObj.todayData.normalUser}} | {{dataObj.allData.normalUser}}</span>
                            </p>
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-huiyuan'></i> 会员</span>
                                <span
                                    class='poverData'>{{dataObj.todayData.vipUser}} | {{dataObj.allData.vipUser}}</span>
                            </p>
                        </div>
                    </el-popover>

                    <!--测试修改提交-->
                    <!--prepub分支测试修改-->
                    <button>这是一个测试button</button>
                    <a href="jdiwa">这是一个测试按钮</a>




                    <el-card class="box-card" v-popover:popover1>
                        <div class="text item dataCard">
                            <div class="square_wrap">
                                <div class="icon_square square square_green">
                                    <p class='iconP '><i class='iconfont icon-yonghuguanli font_green'></i></p>
                                    <p><span class='font_green'>用户</span></p>
                                </div>

                            </div>
                            <div class="data_square square">
                                <div class="data_add">
                                    <p><span>{{getTodayUser}}</span></p>
                                    <p>新增</p>
                                </div>

                                <div class="data_all">
                                    <p style='font-size: 16px;'>{{getAllUser}}</p>
                                    <p>全部</p>
                                </div>
                            </div>
                            <div class="pic_square square">
                                <div class="pic_line pic_green" v-for='(o , index) in 8' :index='index'>

                                </div>
                            </div>
                        </div>
                    </el-card>


                </el-col>
                <el-col :span='8'>
                    <el-popover
                        ref="popover2"
                        placement="bottom"
                        trigger="hover"
                        :width='dataWidth'
                    >
                        <div class="pover_content">
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-dingdan'></i> 订单数量</span>
                                <span class='poverData'>{{dataObj.todayData.orderCount}} | {{dataObj.allData.orderCount}}</span>
                            </p>
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-jifendingdan'></i> 订单金额</span>
                                <span class='poverData'>{{dataObj.todayData.orderTotalAmount}} | {{dataObj.allData.orderTotalAmount}}</span>
                            </p>

                        </div>
                    </el-popover>

                    <el-card class="box-card" v-popover:popover2>
                        <div class="text item dataCard">
                            <div class="square_wrap">
                                <div class="icon_square square square_blue">
                                    <p class='iconP '><i class='iconfont icon-dingdan font_blue'></i></p>
                                    <p><span class='font_blue'>订单</span></p>
                                </div>
                            </div>
                            <div class="data_square square">

                                <div class="data_add">
                                    <p><span>{{dataObj.todayData.orderCount}}</span></p>
                                    <p>新增</p>
                                </div>

                                <div class="data_all">
                                    <p style='font-size: 16px;'>{{dataObj.allData.orderCount}}</p>
                                    <p>全部</p>
                                </div>

                                <!--<p><b>{{dataObj.todayData.orderCount}}</b>&nbsp;&nbsp;/&nbsp;&nbsp;{{dataObj.allData.orderCount}}</p>-->
                                <!--<p>新增&nbsp;&nbsp;/&nbsp;&nbsp;全部</p>-->
                            </div>
                            <div class="pic_square square">
                                <div class="pic_line pic_blue" v-for='(o , index) in 8' :index='index'>

                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='8'>
                    <el-popover
                        ref="popover3"
                        placement="bottom"
                        trigger="hover"
                        :width='dataWidth'
                    >
                        <div class="pover_content">
                            <p>
                                <span class='poverTitle'><i class='iconfont icon-web-icon-'></i> 终端数量</span>
                                <span class='poverData'>{{dataObj.todayData.device}} | {{dataObj.allData.device}}</span>
                            </p>
                        </div>
                    </el-popover>
                    <el-card class="box-card" v-popover:popover3>
                        <div class="text item dataCard">
                            <div class="square_wrap">
                                <div class="icon_square square square_red">
                                    <p class='iconP'><i class='iconfont icon-web-icon- font_red'></i></p>
                                    <p><span class='font_red'>终端</span></p>
                                </div>
                            </div>
                            <div class="data_square square">

                                <div class="data_add">
                                    <p><span>{{dataObj.todayData.device}}</span></p>
                                    <p>新增</p>
                                </div>

                                <div class="data_all">
                                    <p style='font-size: 16px;'>{{dataObj.allData.device}}</p>
                                    <p>全部</p>
                                </div>

                                <!--<p><b>{{dataObj.todayData.device}}</b>&nbsp;&nbsp;/&nbsp;&nbsp;{{dataObj.allData.device}}</p>-->
                                <!--<p>新增&nbsp;&nbsp;/&nbsp;&nbsp;全部</p>-->
                            </div>
                            <div class="pic_square square">
                                <div class="pic_line pic_red" v-for='(o , index) in 8' :index='index'>

                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>

        <!--折线图-->
        <div class="lineChart topRank">

            <el-row :gutter="20">

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>用户增长</span>
                            <el-button type="text"><i class='el-icon-arrow-right'></i></el-button>
                            <!--单选筛选项-->
                            <el-radio-group v-model="lineObj.userLineDate"
                                            size="small">
                                <el-radio-button label="day">今天</el-radio-button>
                                <el-radio-button label="week">7天</el-radio-button>
                                <el-radio-button label="month">30天</el-radio-button>
                            </el-radio-group>
                        </div>

                        <div class="text item">
                            <a-line
                                :colorarray='lineObj.userColorArr'
                                :api='lineObj.userLineApi'
                                :timeSlice='lineObj.userLineDate'
                                style='display: inline-block;'
                                height='380px'
                            >
                            </a-line>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>订单数量增长</span>
                            <el-button type="text"><i class='el-icon-arrow-right'></i></el-button>
                            <!--单选筛选项-->
                            <el-radio-group v-model="lineObj.billingLineDate"
                                            size="small">
                                <el-radio-button label="day">今天</el-radio-button>
                                <el-radio-button label="week">7天</el-radio-button>
                                <el-radio-button label="month">30天</el-radio-button>
                            </el-radio-group>
                        </div>

                        <div class="text item">
                            <a-line
                                :colorarray='lineObj.billingColorArr'
                                :api='lineObj.billingLineApi'
                                :timeSlice='lineObj.billingLineDate'
                                style='display: inline-block;'
                                height='380px'

                            >
                            </a-line>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>社交账号粉丝量</span>
                        </div>

                        <div class="text item">
                            <a-bar
                                height='384px'
                                :api='barObj.barApi'
                            >
                            </a-bar>
                        </div>

                    </el-card>
                </el-col>

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>微信商城（畅销商品top10）</span>

                            <el-button type="text"><i class='el-icon-arrow-right'></i></el-button>

                            <!--单选筛选项-->
                            <el-radio-group @change='getShopData(rankObj.shopDate)' v-model="rankObj.shopDate"
                                            size="small">
                                <el-radio-button label="day">今天</el-radio-button>
                                <el-radio-button label="week">7天</el-radio-button>
                                <el-radio-button label="month">30天</el-radio-button>
                            </el-radio-group>

                        </div>

                        <div v-if='rankObj.shopData.length != 0' class='top10'>
                            <div v-for="(data, index) in rankObj.shopData" :key="index" class="text item">
                                <p>
                                    <span class='itemName'>{{ index+1 + '.'}}&nbsp;&nbsp;<span
                                        style='font-size: 12px;color: #818785;'>{{ data.goodsName }}</span></span>
                                    <span class='itemPrice'>￥{{data.goodsPrice}}</span>
                                    <span class='itemNum'>{{data.goodsCount}}件</span>
                                </p>
                            </div>
                        </div>
                        <div v-else>
                            <p class='noData'>暂无数据</p>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>贩售机线下销量（畅销商品top10）</span>

                            <el-button type="text"><i class='el-icon-arrow-right'></i></el-button>

                            <!--单选筛选项-->
                            <el-radio-group @change='getTopVEM(rankObj.topVEMdate)' v-model="rankObj.topVEMdate"
                                            size="small">
                                <el-radio-button label="day">今天</el-radio-button>
                                <el-radio-button label="week">7天</el-radio-button>
                                <el-radio-button label="month">30天</el-radio-button>
                            </el-radio-group>

                        </div>

                        <div v-if='rankObj.topVEM.length != 0' class='top10'>
                            <div v-for="(data, index) in rankObj.topVEM" :key="index" class="text item">
                                <p>
                                    <span class='itemName'>{{ index+1 + '.'}}&nbsp;&nbsp;<span
                                        style='font-size: 12px;color: #818785;'>{{ data.deviceId }} （{{data.city + data.district}}）</span></span>
                                    <span class='itemPrice'>￥{{data.saleMoney}}</span>
                                    <span class='itemNum'>{{data.saleCount}}件</span>
                                </p>
                            </div>
                        </div>

                        <div v-else>
                            <p class='noData'>暂无数据</p>
                        </div>

                    </el-card>
                </el-col>

                <el-col :xl='8' :lg='12' :xs="12" :sm="12" :md="12">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>贩售机终端（畅销商品top10）</span>

                            <el-button type="text"><i class='el-icon-arrow-right'></i></el-button>

                            <!--单选筛选项-->
                            <el-radio-group @change='getVEMdata(rankObj.VEMdate)' v-model="rankObj.VEMdate"
                                            size="small">
                                <el-radio-button label="day">今天</el-radio-button>
                                <el-radio-button label="week">7天</el-radio-button>
                                <el-radio-button label="month">30天</el-radio-button>
                            </el-radio-group>
                        </div>

                        <div v-if='rankObj.VEMData.length != 0' class='top10'>
                            <div v-for="(data, index) in rankObj.VEMData" :key="index" class="text item">
                                <p>
                                    <span class='itemName'>{{ index+1 + '.'}}&nbsp;&nbsp;<span
                                        style='font-size: 12px;color: #818785;'>{{ data.goodsName }}</span></span>
                                    <span class='itemPrice'>￥{{data.goodsPrice}}</span>
                                    <span class='itemNum'>{{data.goodsCount}}件</span>
                                </p>
                            </div>
                        </div>

                        <div v-else>
                            <p class='noData'>暂无数据</p>
                        </div>


                    </el-card>
                </el-col>

            </el-row>
        </div>

        <!--饼图-->
        <div class="pieChart topRank lineChart">

            <el-row :gutter="20">
                <el-col :span='8'>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>消费用户比例</span>
                        </div>

                        <div class="text item">
                            <a-pie
                                :api='pieObj.customerApi'
                                style='display: inline-block;'>
                            </a-pie>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span='8'>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>支付偏好</span>
                        </div>

                        <div class="text item">
                            <a-pie
                                :api='pieObj.payWayApi'
                                style='display: inline-block;'>
                            </a-pie>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span='8'>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>渠道销量比</span>

                        </div>

                        <div class="text item">
                            <a-pie
                                :api='pieObj.DCApi'
                                style='display: inline-block;'>
                            </a-pie>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>

        <!--地图-->
        <div class="map lineChart topRank">

            <el-row :gutter="20">
                <el-col :span='24'>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix card-header">
                            <span>用户地域分布</span>
                            <a class='downloadData' :href='downloadUrl' download>数据下载</a>
                        </div>

                        <div class="text item">
                            <a-map

                                width='50%'
                                height='510px'
                                style='display:inline-block;'>

                            </a-map>

                            <div class='mapData'>

                                <!--el-scrollbar 调用-->
                                <el-scrollbar
                                    wrap-class="mapData__wrap"
                                >
                                    <el-table
                                        :data="mapObj.mapData"
                                    >

                                        <el-table-column

                                            type="index"
                                            label=' '
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="name"
                                            label="省份"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="value"
                                            label="会员数量">
                                        </el-table-column>
                                        <el-table-column
                                            prop="percent"
                                            label="占比">
                                        </el-table-column>
                                    </el-table>

                                </el-scrollbar>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>

    </div>


</template>


<script type="text/ecmascript-6" src='./dashboard.js'>
</script>


<style lang='less' src='./dashboard.less'>
</style>
