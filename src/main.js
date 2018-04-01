// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import {strings} from './constants'

Vue.use(VueI18n)

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // set locale
  strings // set locale messages
})

// Create a Vue instance with `i18n` option
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
