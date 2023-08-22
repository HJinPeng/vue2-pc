import http from '@http'
export function getList() {
  return http({
    url: '/biz/scoring/tool/list',
    validate: (resData, res) => {
      return resData.success === true
    },
    extractData: (resData, res) => {
      return resData.result.map((item) => ({
        name: item.name
      }))
    },
    alert: true,
    md5: true,
    nativeOptions: {
      headers: {
        'X-Access-Token':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTI2MTUyMTksInVzZXJuYW1lIjoiYWRtaW4ifQ.NeMfWyKHXlYeJ1dxf3sjxd296DZBD98iBTCfKAz4Kjk'
      }
    }
  })
}

export function getList2() {
  return http({
    url: '/biz/scoring/tool/list',
    validate: (resData, res) => {
      return resData.success === true
    },
    extractData: (resData, res) => {
      console.log('res', res)
      // return resData.result.map((item) => ({
      //   name: item.name
      // }))
      return res
    },
    alert: true,
    module: 'mock',
    md5: false
  })
}
