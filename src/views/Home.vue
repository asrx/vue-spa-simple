<template>
    <h1>Home Page</h1>
</template>

<script>
    export default {
        name: "Index",
        created(){
        },
        methods:{
            login(){

                let dataForm = {
                    email:'XXXX@163.com',
                    password:'123123'
                }
                
                axios.post('/auth/login',dataForm).then(response => {
                
                }).then(error => {
                    
                })
            }
        }
    }
</script>

<style scoped>
    h1{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
