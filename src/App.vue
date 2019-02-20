<template>
  <div id="App">
    <div>
      <button @click="mounted">请求</button>
      <P>{{msg}}</P>
      <router-link  to="/HelloWorld"> 跳转 hello world</router-link>
      <router-link  to="/about"> 跳转 about</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                msg: '我喜欢'
            }
        },
        methods: {
            mounted () {
                this.$fetch('/client/client-msg/getClientMsg', {id: 80})
                    .then((response) => {
                        this.msg = response
                    })
            }
        },
        computed: {
            reversedMessage () {
                return this.msg
            }
        }
    }
</script>

<style>

</style>
