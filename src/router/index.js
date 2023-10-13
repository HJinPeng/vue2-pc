import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import WelcomeView from '@/views/welcome/WelcomeView.vue'

// 进度条配置
NProgress.configure({
  showSpinner: false // 去掉右上角转圈
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView,
    meta: {
      layout: 'LayoutSidebarHeader',
      title: '欢迎页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
