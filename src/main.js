// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './stores/index'

import zh_CN from './locale/zh_CN'
import * as VeeValidate from 'vee-validate'

// 组件中使用 this.$http.get ...
// Vue.prototype.$http = axios

Vue.config.productionTip = false
// this.$router.push({name: 'profile'})
Vue.use(VueRouter)
// this.$validator.validateAll().then(result => {})
Vue.use(VeeValidate)

VeeValidate.localize('zh_CN', zh_CN)

Vue.component('app',App)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
})
