import http from '@/common/http'

/**
 * 获取用户分页列表
 * @author jinpengh
 *
 * @param {Object} params
 * @param {String} params.account 账号
 * @param {String} params.realname 用户名
 * @returns {*}
 */
export function getUserPageApi(params) {
  return http({
    url: '/user/page',
    params
  })
}
