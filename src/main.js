import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/index.js'
import request from './api/request.js'

Vue.config.productionTip = false

// 在建構實例後才加prototype會無法掛載...
Vue.prototype.$api = api
Vue.prototype.$axios = request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
