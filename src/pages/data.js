export function steps(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push({
      id: i,
      title: `这是第${i + 1}步`,
    });
  }
  return arr;
}

const allScene = [
  {
    sceneCode: 19,
    sceneType: 0,
    isExperience: 1,
    sceneName: '???????????????',
    pic: 'http://file.simu800.com/scene/pic/???/????????.png',
  },
  {
    sceneCode: 35,
    sceneType: 0,
    isExperience: 1,
    sceneName: '????????????????',
    pic: 'http://file.simu800.com/scene/pic/???/???????????.png',
  },
  {
    sceneCode: 124,
    sceneType: 0,
    isExperience: 0,
    sceneName: '???????????',
    pic: 'http://file.simu800.com/scene/pic/???/???????????.png',
  },
  {
    sceneCode: 67,
    sceneType: 0,
    isExperience: 1,
    sceneName: '????????????????',
    pic: 'http://file.simu800.com/scene/pic/???/??????.png',
  },
  {
    sceneCode: 100,
    sceneType: 0,
    isExperience: 0,
    sceneName: '??????????',
    pic: 'http://file.simu800.com/scene/pic/???/??????.png',
  },
  {
    sceneCode: 116,
    sceneType: 0,
    isExperience: 0,
    sceneName: '??????????',
    pic: 'http://file.simu800.com/scene/pic/???/??????.png',
  },
  {
    sceneCode: 59,
    sceneType: 0,
    isExperience: 0,
    sceneName: '???????????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 142,
    sceneType: 0,
    isExperience: 0,
    sceneName: '?????????',
    pic: 'http://file.simu800.com/scene/pic/???/??????.png',
  },
  {
    sceneCode: 140,
    sceneType: 0,
    isExperience: 0,
    sceneName: '????????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 177,
    sceneType: 1,
    isExperience: 0,
    sceneName: '???????????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 176,
    sceneType: 0,
    isExperience: 0,
    sceneName: '??????????',
    pic: 'http://file.simu800.com/scene/pic/???/??????????.png',
  },
  {
    sceneCode: 141,
    sceneType: 0,
    isExperience: 0,
    sceneName: '?????????',
    pic: 'http://file.simu800.com/scene/pic/???/????????.png',
  },
  {
    sceneCode: 174,
    sceneType: 1,
    isExperience: 0,
    sceneName: '??????????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 175,
    sceneType: 1,
    isExperience: 0,
    sceneName: '???????????',
    pic: 'http://file.simu800.com/scene/pic/???/?????????.png',
  },
  {
    sceneCode: 180,
    sceneType: 1,
    isExperience: 0,
    sceneName: '??????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 181,
    sceneType: 0,
    isExperience: 0,
    sceneName: '???????',
    pic: 'http://file.simu800.com/scene/pic/???/?????.png',
  },
  {
    sceneCode: 182,
    sceneType: 1,
    isExperience: 0,
    sceneName: '??????',
    pic: 'http://file.simu800.com/scene/pic/???/????.png',
  },
  {
    sceneCode: 178,
    sceneType: 1,
    isExperience: 0,
    sceneName: '????????????',
    pic: 'http://file.simu800.com/scene/pic/???/???-1_07.png',
  },
  {
    sceneCode: 179,
    sceneType: 0,
    isExperience: 0,
    sceneName: '??????????',
    pic: 'http://file.simu800.com/scene/pic/???/???-1_03.png',
  },
  {
    sceneCode: 83,
    sceneType: 0,
    isExperience: 0,
    sceneName: '???????????',
    pic: 'http://file.simu800.com/scene/pic/???/???????.png',
  },
  {
    sceneCode: 252,
    sceneType: 0,
    isExperience: 0,
    sceneName: '?????????',
    pic: 'http://file.simu800.com/scene/pic/???/?????????.jpg',
  },
];
let codes = allScene.map(item => item.sceneCode);
// console.log(codes);
// let ids = [19,35,124,67,100,116,59,142,140,177,176,141,174,175,180,181,182,178,179,83,252];

const chartData = [
  {
    "netDate": "2015-11-13",
    "productCode": 11790,
    "netValue": 1.0135,
    "acumulateNetValue": 1.0135
  },
  {
    "netDate": "2015-11-06",
    "productCode": 11790,
    "netValue": 1.0158,
    "acumulateNetValue": 1.0158
  },
  {
    "netDate": "2015-10-30",
    "productCode": 11790,
    "netValue": 0.9931,
    "acumulateNetValue": 0.9931
  },
  {
    "netDate": "2015-10-23",
    "productCode": 11790,
    "netValue": 0.9950,
    "acumulateNetValue": 0.9950
  },
  {
    "netDate": "2015-10-16",
    "productCode": 11790,
    "netValue": 0.9997,
    "acumulateNetValue": 0.9997
  },
  {
    "netDate": "2015-10-09",
    "productCode": 11790,
    "netValue": 0.9675,
    "acumulateNetValue": 0.9675
  },
  {
    "netDate": "2015-09-30",
    "productCode": 11790,
    "netValue": 0.9398,
    "acumulateNetValue": 0.9398
  },
  {
    "netDate": "2015-09-25",
    "productCode": 11790,
    "netValue": 0.9243,
    "acumulateNetValue": 0.9243
  },
  {
    "netDate": "2015-09-18",
    "productCode": 11790,
    "netValue": 0.9131,
    "acumulateNetValue": 0.9131
  },
  {
    "netDate": "2015-09-11",
    "productCode": 11790,
    "netValue": 0.9572,
    "acumulateNetValue": 0.9572
  },
  {
    "netDate": "2015-09-02",
    "productCode": 11790,
    "netValue": 0.9591,
    "acumulateNetValue": 0.9591
  },
  {
    "netDate": "2015-08-31",
    "productCode": 11790,
    "netValue": 1.0130,
    "acumulateNetValue": 1.0130
  },
  {
    "netDate": "2015-08-28",
    "productCode": 11790,
    "netValue": 1.0321,
    "acumulateNetValue": 1.0321
  },
  {
    "netDate": "2015-08-21",
    "productCode": 11790,
    "netValue": 1.0941,
    "acumulateNetValue": 1.0941
  },
  {
    "netDate": "2015-08-14",
    "productCode": 11790,
    "netValue": 1.2256,
    "acumulateNetValue": 1.2256
  },
  {
    "netDate": "2015-08-07",
    "productCode": 11790,
    "netValue": 1.1992,
    "acumulateNetValue": 1.1992
  },
  {
    "netDate": "2015-07-31",
    "productCode": 11790,
    "netValue": 1.1666,
    "acumulateNetValue": 1.1666
  },
  {
    "netDate": "2015-07-24",
    "productCode": 11790,
    "netValue": 1.1927,
    "acumulateNetValue": 1.1927
  },
  {
    "netDate": "2015-07-17",
    "productCode": 11790,
    "netValue": 1.1784,
    "acumulateNetValue": 1.1784
  },
  {
    "netDate": "2015-07-10",
    "productCode": 11790,
    "netValue": 1.1324,
    "acumulateNetValue": 1.1324
  },
  {
    "netDate": "2015-07-03",
    "productCode": 11790,
    "netValue": 1.1997,
    "acumulateNetValue": 1.1997
  },
  {
    "netDate": "2015-06-30",
    "productCode": 11790,
    "netValue": 1.3193,
    "acumulateNetValue": 1.3193
  },
  {
    "netDate": "2015-06-26",
    "productCode": 11790,
    "netValue": 1.3048,
    "acumulateNetValue": 1.3048
  },
  {
    "netDate": "2015-06-19",
    "productCode": 11790,
    "netValue": 1.4030,
    "acumulateNetValue": 1.4030
  },
  {
    "netDate": "2015-06-12",
    "productCode": 11790,
    "netValue": 1.5775,
    "acumulateNetValue": 1.5775
  },
  {
    "netDate": "2015-06-05",
    "productCode": 11790,
    "netValue": 1.5709,
    "acumulateNetValue": 1.5709
  },
  {
    "netDate": "2015-05-29",
    "productCode": 11790,
    "netValue": 1.4045,
    "acumulateNetValue": 1.4045
  },
  {
    "netDate": "2015-05-22",
    "productCode": 11790,
    "netValue": 1.4275,
    "acumulateNetValue": 1.4275
  },
  {
    "netDate": "2015-05-15",
    "productCode": 11790,
    "netValue": 1.3049,
    "acumulateNetValue": 1.3049
  },
  {
    "netDate": "2015-05-08",
    "productCode": 11790,
    "netValue": 1.2446,
    "acumulateNetValue": 1.2446
  },
  {
    "netDate": "2015-04-30",
    "productCode": 11790,
    "netValue": 1.2596,
    "acumulateNetValue": 1.2596
  },
  {
    "netDate": "2015-04-24",
    "productCode": 11790,
    "netValue": 1.2448,
    "acumulateNetValue": 1.2448
  },
  {
    "netDate": "2015-04-17",
    "productCode": 11790,
    "netValue": 1.2107,
    "acumulateNetValue": 1.2107
  },
  {
    "netDate": "2015-04-10",
    "productCode": 11790,
    "netValue": 1.1822,
    "acumulateNetValue": 1.1822
  },
  {
    "netDate": "2015-04-03",
    "productCode": 11790,
    "netValue": 1.1613,
    "acumulateNetValue": 1.1613
  },
  {
    "netDate": "2015-03-31",
    "productCode": 11790,
    "netValue": 1.1323,
    "acumulateNetValue": 1.1323
  },
  {
    "netDate": "2015-03-27",
    "productCode": 11790,
    "netValue": 1.1321,
    "acumulateNetValue": 1.1321
  },
  {
    "netDate": "2015-03-20",
    "productCode": 11790,
    "netValue": 1.0968,
    "acumulateNetValue": 1.0968
  },
  {
    "netDate": "2015-03-13",
    "productCode": 11790,
    "netValue": 1.0418,
    "acumulateNetValue": 1.0418
  },
  {
    "netDate": "2015-03-06",
    "productCode": 11790,
    "netValue": 1.0214,
    "acumulateNetValue": 1.0214
  },
  {
    "netDate": "2015-02-27",
    "productCode": 11790,
    "netValue": 1.0325,
    "acumulateNetValue": 1.0325
  },
  {
    "netDate": "2015-02-13",
    "productCode": 11790,
    "netValue": 1.0095,
    "acumulateNetValue": 1.0095
  },
  {
    "netDate": "2015-02-06",
    "productCode": 11790,
    "netValue": 0.9984,
    "acumulateNetValue": 0.9984
  },
  {
    "netDate": "2015-01-30",
    "productCode": 11790,
    "netValue": 1.0005,
    "acumulateNetValue": 1.0005
  },
  {
    "netDate": "2015-01-23",
    "productCode": 11790,
    "netValue": 1.0004,
    "acumulateNetValue": 1.0004
  },
  {
    "netDate": "2015-01-16",
    "productCode": 11790,
    "netValue": 1.0001,
    "acumulateNetValue": 1.0001
  },
  {
    "netDate": "2015-01-12",
    "productCode": 11790,
    "netValue": 1.0000,
    "acumulateNetValue": 1.0000
  }
]

export default {
  chartData: chartData
}