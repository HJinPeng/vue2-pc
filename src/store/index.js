import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions,
  modules: {
    auth
  }
})
