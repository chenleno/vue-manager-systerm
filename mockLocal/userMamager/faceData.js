import Mock from 'mockjs';
export default Mock.mock('/faceData', {
    'imgSrc' : Mock.Random.image('200x200'),
  'data|6': [{
    'recognitionTime': '@date   @time ',
    'use|1': ['登陆', '支付'],
    "deviceNumber|1-1000": 1000,
    "deviceAddress": "@city(true)"
  }]
});
