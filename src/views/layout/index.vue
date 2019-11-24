<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Side></Side>
      </el-aside>
      <el-main height="100%">
        <router-view/>
      </el-main>
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
  }
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 20px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
