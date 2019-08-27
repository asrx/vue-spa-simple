<template>
  <div>
    <top-menu v-if="user.authenticated"></top-menu>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import TopMenu from './components/commom/TopMenu'
  import JwtToken from './helpers/jwt'
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState({
        user: state => state.AuthUser
      })
    },
    created(){
      if (JwtToken.getToken()){
        this.$store.dispatch('setAuthUser')
      }else if (JwtToken.getAuthId()){
        this.$store.dispatch('refreshToken')
      }
    },
    components:{
      TopMenu
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
