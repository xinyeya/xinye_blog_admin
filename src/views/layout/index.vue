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
        <p class="bread">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
              <router-link v-if="item.url" :to="item.url">{{item.name}}</router-link>
              <a v-else>
                  {{item.name}}
              </a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </p>
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
.bread{
  background-color: #f0f2f5;
}
</style>
