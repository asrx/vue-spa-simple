import Vue from 'vue'
import Vuex from 'vuex'

import AuthUser from './modules/auth-user'
import Notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthUser,
    Notification
  },

  strict: true
})
