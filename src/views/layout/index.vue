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
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <br />
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
}
</style>
