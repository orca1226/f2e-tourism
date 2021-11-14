import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/index.js'
import request from './api/request.js'

// 套件
import VueHorizontal from 'vue-horizontal'

Vue.config.productionTip = false
Vue.use(VueHorizontal)

// 在建構實例後才加prototype會無法掛載...
Vue.prototype.$api = api
Vue.prototype.$axios = request

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
