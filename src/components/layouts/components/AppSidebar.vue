<script>
import { Menu } from 'ant-design-vue'
import AppLogo from './AppLogo.vue'
import { mapGetters } from 'vuex'

export default {
  props: {
    hideLogo: Boolean
  },
  components: {
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
    AppLogo
  },
  data() {
    return {
      selectedKeys: [],
      openKeys: []
    }
  },
  computed: {
    ...mapGetters({ menus: 'Menu', allMenu: 'AllMenu' })
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        const { fullPath = [] } = route.meta
        this.openKeys = fullPath.reduce((acc, cur) => {
          if (!cur.path) return [...acc, `${cur.id}`]
          return acc
        }, [])
        for (let i = fullPath.length - 1; i >= 0; i--) {
          if (!fullPath[i].hidden) {
            this.selectedKeys = [`${fullPath[i].id}`]
            break
          }
        }
      }
    }
  },
  methods: {
    // 点击菜单
    selectMenu({ keyPath }) {
      this.selectedKeys = keyPath
      const menu = this.allMenu[keyPath]
      this.$router.push({ name: menu.menuCode })
    },
    // 点击subMenu
    openChange(openKeys) {
      this.openKeys = openKeys
    },
    // 格式化菜单，将hiddenMenu的过滤
    generateMenu(menus) {
      return menus.reduce((acc, menu) => {
        if (menu.hiddenMenu) return acc
        if (menu.children?.length)
          return [...acc, { ...menu, children: this.generateMenu(menu.children) }]
        return [...acc, menu]
      }, [])
    },
    // 渲染菜单
    renderMenu(menuTree) {
      console.log('menuTree', menuTree)
      return menuTree.map((menu) => {
        if (menu.menuCode && (!menu.children || menu.children.length === 0)) {
          return (
            <a-menu-item key={`${menu.id}`}>
              {menu.icon && <a-icon type={menu.icon} />}
              <span>{menu.title}</span>
            </a-menu-item>
          )
        } else {
          return (
            <a-sub-menu key={`${menu.id}`}>
              <span slot="title">
                {menu.icon && <a-icon type={menu.icon} />}
                <span>{menu.title}</span>
              </span>
              {menu.children && this.renderMenu(menu.children)}
            </a-sub-menu>
          )
        }
      })
    }
  },
  render() {
    return (
      <div class="app-sidebar">
        {!this.hideLogo && <AppLogo class="app-sidebar__logo" />}
        <a-menu
          selected-keys={this.selectedKeys}
          open-keys={this.openKeys}
          mode="inline"
          class="app-sidebar__menu"
          onOpenChange={(openKeys) => this.openChange(openKeys)}
          onSelect={(menu) => this.selectMenu(menu)}
        >
          {this.renderMenu(this.menus)}
        </a-menu>
      </div>
    )
  }
}
</script>

<style lang="less">
.app-sidebar {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
  // box-shadow: 0 0 4px #e7ebf0;
  &__logo {
    height: 64px;
  }
  &__menu {
    flex: 1;
    overflow: hidden auto;
    border-right: none;
    &.a-menu {
      border-right: none;
    }
  }
}
</style>
