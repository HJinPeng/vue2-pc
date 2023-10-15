import http from '@/common/http'

/**
 * 登录：账号密码
 * @author jinpengh
 *
 * @param {Object} params
 * @param {String} params.account 账号
 * @param {String} params.password 密码
 * @returns {Promise<Object>}
 */
export function loginApi(params) {
  return http({
    url: 'base/user/auth/login',
    params,
    module: 'mock'
  })
}

/**
 * 获取用户权限：菜单，权限码
 * @author jinpengh
 *
 * @returns {Promise<Object>}
 */
export function getUserPermissionApi() {
  // return http({
  //   url: '/base/permission/queryUserMenuPermission'
  // })
  return Promise.resolve({
    menus: [
      {
        id: 1,
        title: '系统管理',
        permissionName: '系统管理',
        permissionType: 'menu',
        menuCode: null,
        layout: null,
        icon: 'setting',
        permissionCode: '',
        hiddenMenu: null,
        keepAlive: null,
        externalLink: null,
        status: 'enable',
        children: [
          {
            id: 11,
            title: '用户管理',
            permissionName: '用户管理',
            permissionType: 'menu',
            menuCode: 'UserManagement',
            layout: 'LayoutHeaderSidebar',
            icon: 'user',
            hiddenMenu: null,
            keepAlive: true,
            externalLink: null,
            status: 'enable',
            permissionCode: '',
            children: [
              {
                id: 112,
                title: '用户详情',
                permissionName: '用户详情',
                permissionType: 'menu',
                menuCode: 'UserDetail',
                layout: 'LayoutHeaderSidebar',
                icon: 'user',
                hiddenMenu: true,
                keepAlive: false,
                externalLink: null,
                status: 'enable',
                permissionCode: ''
              }
            ]
          },
          {
            id: 13,
            title: '字典管理',
            permissionName: '字典管理',
            permissionType: 'menu',
            menuCode: 'DictManagement',
            layout: 'LayoutHeaderSidebar',
            icon: 'book',
            hiddenMenu: null,
            keepAlive: false,
            externalLink: null,
            status: 'enable',
            permissionCode: ''
          }
        ]
      }
    ]
  })
}

/**
 * 根据token获取用户信息
 * @author jinpengh
 *
 * @returns {Promise<Object>}
 */
export function getUserInfoApi() {
  return http({
    url: '/base/user/auth/getLoginUser',
    module: 'mock'
  })
  // return Promise.resolve({
  //   organizationName: '正就清',
  //   email: 'g.eitutlbow@qq.com',
  //   realname: '管理员',
  //   roles: [
  //     {
  //       updateBy: 'magna',
  //       deleted: true,
  //       createByName: '口适完',
  //       updateDateTime: '2018-04-28 04:17:26',
  //       updateByName: '目共别其见',
  //       status: 'Excepteur exercitation tempor laboris est',
  //       roleCode: '9',
  //       createBy: 'minim anim ex',
  //       roleName: '管理员',
  //       id: 8,
  //       comment: 'adipisicing',
  //       createDateTime: '2003-10-14 04:58:59'
  //     }
  //   ],
  //   account: 'admin',
  //   phone: '18172317172',
  //   id: 18,
  //   token: 'sdlfkjasdfjalnasndfasjdlkfjslkfjslkdjfsd',
  //   sex: 85,
  //   birthday: '1989-09-28',
  //   status: 1,
  //   profilePhoto: 'http://dummyimage.com/400x400',
  //   oaStatus: 'nostrud',
  //   organizationCode: '77'
  // })
}
