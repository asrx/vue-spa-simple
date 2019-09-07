import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import JwtToken from './helpers/jwt'

import zh_CN from './locale/zh_CN'
import * as VeeValidate from 'vee-validate'

Vue.use(VeeValidate);
VeeValidate.localize('zh_CN', zh_CN);

// 每次发起请求都加入headers
axios.interceptors.request.use(config => {
  if (JwtToken.getToken()) {
    config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
  }
  return config
},error => {
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
