// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueI18n from 'vue-i18n'
import {messages} from './constants'
import router from './router/index'
import {store} from './store'
import Vuex from 'vuex'
// required by Vuex
import 'es6-promise/auto'

Vue.use(Vuex)
Vue.use(VueI18n)

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // set locale
  messages // set locale messages
})

// Create a Vue instance with `i18n` option
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
