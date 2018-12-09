// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import messages from './lang/messages'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const i18n = new VueI18n({
  locale: 'fr',
  messages
})

const store = new Vuex.Store({
  state: { items: [], totalCount: 0 },
  mutations: {
    increment (cart, payload) {
      let item = cart.items.find(item => item.id === payload.id)

      if (item) {
        item.count++
      } else {
        payload.count = 1
        cart.items.push(payload)
      }

      cart.totalCount = cart.items.reduce((total, element) => total + element.count, 0)
    },
    remove (cart, payload) {
      cart.items = cart.items.filter(item => item.id !== payload.id)
      cart.totalCount = cart.items.reduce((total, element) => total + element.count, 0)
    }
  },
  plugins: [vuexLocal.plugin]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
