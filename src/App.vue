<template>
  <div>
    <notification></notification>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/foo">Foo</a></li>
      <li><a href="/bar">Bar</a></li>
    </ul>
    <hr />
    <router-view />
  </div>

</template>
<script>
  import Notification from './components/common/Notification'
  import JwtToken from './helpers/jwt'

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
ul{
  text-align: center;
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
  display: inline-block
}
ul li + li{
    border-left: 1px solid #999;
    margin-left: 10px;
}
ul li a{
    display: inline-block;
    padding: 0 1.5rem;
}
.hello{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
