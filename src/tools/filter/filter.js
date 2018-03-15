/**
 * create by xiongtt 2018-03-13
 */
import Vue from 'vue';
    //支付方式过滤器
    Vue.filter('payWayFilter', (value) => {
            return value == 1 ?  '微信': value == 2 ? '支付宝' : value == 3 ? '储值卡' : '其他';
      })

    Vue.filter('behaviorFilter', (value) => {
        return value == 1 ? '登陆' : '支付'; 
    })    
    Vue.filter('userTypeFilter', (value) => {
        return value == 1 ? '泛用户' : value == 2 ? '普通用户' : '会员' ;
    })    
    Vue.filter('genderFilter', (value) => {
        return value == 1 ? '男' : '女' ;
    })    
    Vue.filter('registerSourceFilter', (value) => {
        return value == 1 ? '贩售机' : '其他' ;
    })
