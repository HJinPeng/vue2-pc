import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import antdv from './common/plugins/antdv'

Vue.config.productionTip = false

Vue.use(antdv)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
