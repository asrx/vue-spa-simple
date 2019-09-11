<template>
    <h1>Index Page</h1>
</template>

<script>
    export default {
        name: "Index",
        created(){
            let dataForm = {
                email:'xudong0226@163.com',
                password:'123123'
            }

            axios.post('/auth/login',dataForm).then(response => {
                console.log(response)
            }).then(error => {
                console.log(error)
            })
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
