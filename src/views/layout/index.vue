<template>
  <el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <Side></Side>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from './components/Header'
import Side from './components/Side'

export default {
  name: 'Layout',
  components: {
    Header,
    Side
  },
  data () {}
}
</script>

<style lang="less" scoped>

</style>
