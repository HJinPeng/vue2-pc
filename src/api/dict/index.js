import http from '@/common/http'

/**
 * 获取字典分页列表
 * @author jinpengh
 *
 * @param {Object} params
 * @param {String} params.dictCode 字典编码
 * @param {String} params.dictName 字典名称
 * @returns {*}
 */
export function getDictPageApi(params) {
  return http({
    url: '/dict/page',
    params
  })
}

/**
 * 添加字典
 * @author jinpengh
 *
 * @export
 * @param {Object} data
 * @param {String} data.dictCode
 * @param {String} data.dictName
 * @returns {*}
 */
export function addDictApi(data) {
  return http({
    url: '/dict/add',
    method: 'post',
    data
  })
}

/**
 * 编辑字典
 * @author jinpengh
 *
 * @export
 * @param {Object} data
 * @param {String} data.realCode
 * @param {String} data.realname
 * @returns {*}
 */
export function editDictApi(data) {
  return http({
    url: '/dict/edit',
    method: 'put',
    data
  })
}

/**
 * 通过id删除字典
 * @param {Number} id
 * @returns
 */
export function deleteDictByIdApi(id) {
  return http({
    url: '/dict/delete/' + id,
    method: 'delete'
  })
}
