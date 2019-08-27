import VueRouter from 'vue-router'
import Store from '@/stores/index'
import JwtAutch from '@/helpers/jwt'

import Index from "../components/Index";
import Login from "../components/login/Login";
import Profile from "../components/user/Profile";
import Register from "../components/register/Register";


let routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {}
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      requiresGuest: true
    }
  }
]
const router = new VueRouter({
  mode:'history',
  routes
})

// 检测是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth){
    if (Store.state.AuthUser.authenticated || JwtAutch.getToken()){
      return next()
    }else{
      return next({'name': 'login'})
    }
  }

  if (to.meta.requiresGuest){
    if (Store.state.AuthUser.authenticated || JwtAutch.getToken()) {
      return next({'name': 'profile'})
    }
  }
  return next()
})


export default router
