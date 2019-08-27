<template>
    <div>
        <router-link v-if="!user.authenticated" to="/login" class="p-2 text-dark">
            登录
        </router-link>
        <router-link v-if="!user.authenticated" to="/register" class="p-2 text-dark">
            注册
        </router-link>
        <router-link v-if="user.authenticated" to="/profile" class="p-2 text-dark">
            个人中心
        </router-link>
        <a href="#" @click="logout" v-if="user.authenticated"  class="p-2 text-dark router-link-exact-active router-link-active">
            退出
        </a>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "TopMenu",
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('logoutRequest').then(response => {
                    this.$router.push({name: 'home'})
                })
            }
        }
    }
</script>

<style scoped>

</style>
