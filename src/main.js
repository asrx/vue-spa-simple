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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
