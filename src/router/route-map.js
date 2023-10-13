// 静态路由映射表
export const staticRouteMap = {
  Login: {
    title: '登录',
    path: '/login',
    componentPath: 'view/login/LoginView.vue',
    layout: 'SimpleLayout'
  },
  Welcome: {
    title: '欢迎页',
    path: '/',
    componentPath: 'view/welcome/WelcomeView.vue',
    layout: 'SideHeaderLayout'
  },
  404: {
    title: '未找到资源',
    path: '/404',
    componentPath: 'view/exceptions/NotFound.vue',
    layout: 'SimpleLayout'
  },
  403: {
    title: '没有权限访问该资源',
    path: '/404',
    componentPath: 'view/exceptions/NoPermission.vue',
    layout: 'SimpleLayout'
  }
}

// 动态路由映射表
export const dynamicRouteMap = {
  UserManagement: {
    title: '用户管理',
    path: '/user-management',
    componentPath: 'views/system/user/UserManagement.vue',
    layout: 'SideHeaderLayout'
  }
}

// 所有路由映射表
export const allRouteMap = {
  ...staticRouteMap,
  ...dynamicRouteMap
}
