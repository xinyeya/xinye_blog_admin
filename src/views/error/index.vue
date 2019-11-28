<template>
  <div>
    <h1>404</h1>
    <el-button type="primary" @click="home">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {}
  },
  methods: {
    home () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
