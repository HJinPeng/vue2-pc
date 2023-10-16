// 静态路由映射表
export const staticRouteMap = {
  Login: {
    title: '登录',
    path: '/login',
    componentPath: 'views/login/LoginView.vue',
    layout: 'LayoutSimple'
  },
  Welcome: {
    title: '欢迎页',
    path: '/',
    componentPath: 'views/welcome/WelcomeView.vue',
    layout: 'LayoutSidebarHeader'
  },
  404: {
    title: '未找到资源',
    path: '/404',
    componentPath: 'views/exceptions/NotFound.vue',
    layout: 'LayoutSimple'
  },
  403: {
    title: '没有权限访问该资源',
    path: '/404',
    componentPath: 'views/exceptions/NoPermission.vue',
    layout: 'LayoutSimple'
  }
}

// 动态路由映射表
export const dynamicRouteMap = {
  UserManagement: {
    title: '用户管理',
    path: '/user-management',
    componentPath: 'views/system/user/UserManagement.vue',
    layout: 'LayoutSidebarHeader'
  },
  DictManagement: {
    title: '字典管理',
    path: '/dict-management',
    componentPath: 'views/system/dict/DictManagement.vue',
    layout: 'LayoutSidebarHeader'
  },
  UserDetail: {
    title: '用户详情',
    path: '/user-detail',
    componentPath: 'views/system/user/UserDetail.vue',
    layout: 'LayoutSidebarHeader'
  }
}

// 所有路由映射表
export const allRouteMap = {
  ...staticRouteMap,
  ...dynamicRouteMap
}