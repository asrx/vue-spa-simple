import Vue from 'vue'
import Vuex from 'vuex'

// import Modules from './modules/xxx'
import AuthUser from './modules/auth-user'
import Login from './modules/login'


// this.$store.dispatch
// this.$store.state
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        AuthUser,
        Login
    },
    strict: true
})
