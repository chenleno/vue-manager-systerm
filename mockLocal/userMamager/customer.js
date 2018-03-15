import Mock from 'mockjs';
export default Mock.mock('/customer', {
  'data|6': [{
    'orderTime': '@time',
    'orderType|1': ['预定', '线下购买'],
    'payStatus|1': ['支付成功', '支付失败'],
    'goodsName|1': ['光明鲜奶', '蒙牛鲜奶'],
    'orderMoney|1-100': 100,
    'payWays|1': ['微信', '支付宝'],
    "goodsNumber|1-1000": 1000,
    "deviceAddress": "@city(true)"
  }]
});
