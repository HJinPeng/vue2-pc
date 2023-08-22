import axios from 'axios'
// 完整性加密
import signMd5 from './sign-md5'

import { Notification } from 'element-ui'

// axios实例
const instance = axios.create({
  timeout: process.env.VUE_APP_TIMEOUT
})

// 默认校验函数：响应类型为blob或响应数据中的success为true
function defaultValidate(resData, res) {
  return res?.config.responseType === 'blob' || resData.success === true
}

// 默认获取数据函数：响应数据为blob直接放回，其他返回响应数据中的result
function defaultExtractData(resData, res) {
  return res?.config.responseType === 'blob' ? resData : resData.result
}

/**
 * 请求接口
 * @param {*} 参数配置
 * {
    url: string, 
    method?: Method, // 'get' | 'post' | 'put' | 'delete'
    module?: 'api' | 'mock', // 使用的接口模块
    alert?: boolean, // 默认请求失败自动弹出错误提示，设置false则屏蔽
    md5?: boolean, // 使用md5进行完整性加密
    validate?: (resData, res ) => boolean // 响应数据校验函数
    extractData?: (resData, res) => any // 获取数据函数
    nativeOptions?: {} // axios的其他配置
  }
 * @returns Promise
 */
export default function http({
  method = 'get',
  params,
  data,
  url,
  module = 'api',
  alert = true,
  md5 = false,
  validate = defaultValidate,
  extractData = defaultExtractData,
  nativeOptions = {}
}) {
  if (!/:\/\//.test(url)) {
    console.log('yes')
    url = `/${process.env.VUE_APP_NAME}/${module}/${url}`.replace(/\/\//g, '/')
  }
  console.log('url', url)
  const httpParams = {
    method,
    url,
    params,
    data,
    ...nativeOptions
  }
  if (md5) {
    if (!httpParams.headers) {
      httpParams.headers = {}
    }
    const sign = signMd5.getSign(url, method === 'get' ? params : data)
    httpParams.headers['X-Sign'] = sign
    httpParams.headers['X-TIMESTAMP'] = signMd5.getTimestamp()
  }
  // todo: 添加token

  return instance(httpParams)
    .then((res) => {
      // 校验通过，返回数据
      if (validate(res.data, res)) {
        return extractData(res.data, res)
      }
      // 校验失败，走catch
      return Promise.reject(res)
    })
    .catch((error) => {
      console.log('error', error)
      if (alert) {
        let description = '未知异常，请联系管理员'
        if ('data' in error) {
          description = error.data.message
        } else {
          description = error.message
        }
        console.log('description', description)
        Notification.error({
          title: '系统错误',
          message: description,
          duration: 3000
        })
      }
      // todo: 添加回到登录页的逻辑
      return error
    })
}
