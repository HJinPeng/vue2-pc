import http from '@/common/http'

/**
 * 获取角色分页列表
 * @author jinpengh
 *
 * @param {Object} params
 * @param {String} params.roleCode 角色编码
 * @param {String} params.roleName 角色名称
 * @returns {*}
 */
export function getRolePageApi(params) {
  return http({
    url: '/role/page',
    params
  })
}

/**
 * 添加角色
 * @author jinpengh
 *
 * @export
 * @param {Object} data
 * @param {String} data.roleCode
 * @param {String} data.roleName
 * @returns {*}
 */
export function addRoleApi(data) {
  return http({
    url: '/role/add',
    method: 'post',
    data
  })
}

/**
 * 编辑角色
 * @author jinpengh
 *
 * @export
 * @param {Object} data
 * @param {String} data.realCode
 * @param {String} data.realname
 * @returns {*}
 */
export function editRoleApi(data) {
  return http({
    url: '/role/edit',
    method: 'put',
    data
  })
}

/**
 * 通过id删除角色
 * @param {Number} id
 * @returns
 */
export function deleteRoleByIdApi(id) {
  return http({
    url: '/role/delete/' + id,
    method: 'delete'
  })
}
