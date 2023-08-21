import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import elementui from './common/plugins/elementui.js'
// 修改element主题，scss变量
import './common/styles/variables.scss'

Vue.config.productionTip = false

Vue.use(elementui)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
