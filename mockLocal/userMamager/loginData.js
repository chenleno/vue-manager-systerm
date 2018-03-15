import Mock from 'mockjs';
export default Mock.mock('/loginData', {
  'data|6': [{
    'loginTime': '@time',
    'loginWays|1': ['微信', '支付宝'],
    'loginDuration|1-100': 100,
    "deviceNumber|1-1000": 1000,
    "deviceAddress": "@city(true)"
  }]
});