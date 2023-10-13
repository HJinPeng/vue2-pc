export const menus = [
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
        keepAlive: false,
        externalLink: null,
        status: 'enable',
        permissionCode: ''
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
