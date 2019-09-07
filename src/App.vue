<template>
  <div>
    <notification></notification>
    <router-view />
  </div>

</template>
<script>
  import Notification from './common/Notification'
  import JwtToken from './../helpers/jwt'

  export default {
    created(){
      if (JwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      }else if (JwtToken.getAuthId()){
        this.$store.dispatch('refreshToken')
      }
    },
    components:{
      Notification
    }
  }
</script>
<style>

</style>
