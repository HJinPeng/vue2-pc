import { allRouteMap } from '@/router/route-map'
import router from '@/router'

/**
 * 根据菜单和routeMap生成所有菜单、侧边菜单、路由表
 * @author jinpengh
 *
 * @param {Array} menus
 * @returns {{ allMenu: {Object}; sidebarMenus: {Array}; routes: {Array}; }}
 */
export function normalizeMenus(menus) {
  const allMenu = {} // 所有菜单
  const sidebarMenus = [] // 侧边菜单
  const routes = [] // 根据菜单生成的routes
  traverseMenus(menus, [], allMenu, sidebarMenus, routes)
  return {
    allMenu,
    sidebarMenus,
    routes
  }
}

/**
 * 遍历菜单，根据菜单和routeMap生成所有菜单、侧边菜单、路由表
 * @author jinpengh
 *
 * @param {Array} menus
 * @param {Array} fullPath 菜单的完整路径
 * @param {Object} allMenu 所有菜单的 id:menu
 * @param {Array} sidebarMenus 侧边菜单/侧边菜单的children
 * @param {Array} routes 所有路由
 */
function traverseMenus(menus, fullPath, allMenu, sidebarMenus, routes) {
  menus.forEach((menu) => {
    let _menu = { ...menu, title: menu.permissionName, name: menu.menuCode }
    let routeMap
    if (_menu.name) {
      routeMap = allRouteMap[_menu.name]
      if (routeMap) {
        _menu.path = routeMap.path
        _menu.title = _menu.title || routeMap.title
      } else {
        throw new Error(`找不到name为${_menu.name}对应的routeMap，请检查路由表`)
      }
    }

    const _fullPath = [
      ...fullPath,
      {
        id: _menu.id,
        title: _menu.title,
        path: _menu.path,
        hidden: _menu.hiddenMenu,
        name: _menu.name
      }
    ]

    // 路由
    if (routeMap) {
      const route = {
        id: _menu.id,
        path: _menu.path,
        name: _menu.name,
        componentPath: routeMap.componentPath,
        layout: _menu.layout || routeMap.layout, // 布局
        title: _menu.title,
        hidden: _menu.hiddenMenu
      }
      routes.push(generateRoute(route, _fullPath))
    }

    // 全部菜单
    allMenu[_menu.id] = { ..._menu }

    // 侧边栏菜单
    let sidebarMenusItem = undefined
    if (Array.isArray(sidebarMenus) && !_menu.hiddenMenu) {
      sidebarMenusItem = { ..._menu }
      _menu.children?.length && (sidebarMenusItem.children = [])
      sidebarMenus.push(sidebarMenusItem)
    }

    if (_menu.children?.length) {
      traverseMenus(
        _menu.children,
        _fullPath,
        allMenu,
        sidebarMenusItem ? sidebarMenusItem.children : undefined,
        routes
      )
    }
  })
}

/**
 * 动态添加路由
 * @author jinpengh
 *
 * @param {Array} routes
 */
export function addRoutes(routes) {
  routes.forEach((route) => {
    router.addRoute(route)
  })
}

/**
 * 根据路由基本信息生成对应路由
 * @author jinpengh
 *
 * @param {Object} route 路由信息
 * @param {String} route.path
 * @param {String} route.name
 * @param {String} route.componentPath
 * @param {Number | undefined} route.id
 * @param {'LayoutSimple' | 'LayoutHeader' | 'LayoutHeaderSidebar' | 'LayoutSidebarHeader'} route.layout
 * @param {String} route.title
 * @param {Boolean} route.hiddenMenu
 * @param {Array} fullPath 路由完整路径
 * @returns {{ path: String; name: String; component: () => any; meta: { id: Number; layout: 'LayoutSimple' | 'LayoutHeader' | 'LayoutHeaderSidebar' | 'LayoutSidebarHeader'; title: String; hidden: Boolean; fullPath: Array; }; }}
 */
export function generateRoute(route, fullPath) {
  return {
    path: route.path,
    name: route.name,
    component: () =>
      import(`@/${route.componentPath}`).then((comp) => {
        return comp
      }),
    meta: {
      id: route.id,
      layout: route.layout, // 布局
      title: route.title,
      hidden: route.hiddenMenu,
      fullPath
    }
  }
}
