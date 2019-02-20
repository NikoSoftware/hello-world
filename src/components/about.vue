<template>
    <div id="about">
      <h1>{{msg}}</h1>
        <a-icon type="instagram" />
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '这是关于界面'
    }
  },
  components: { AButton: Button }
}
</script>

<style scoped>

</style>
