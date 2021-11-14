import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import api from './api/index.js'
import request from './api/request.js'
import apiMixin from './mixin/mixin_api.vue'

// 套件
import VueHorizontal from 'vue-horizontal'

Vue.config.productionTip = false
Vue.mixin(apiMixin)
Vue.use(VueHorizontal)

// 在建構實例後才加prototype會無法掛載...
Vue.prototype.$api = api
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
