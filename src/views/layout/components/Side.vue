<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="this.$route.path"
          active-text-color
          router
          class="sideStyle">
          <!-- 首页 -->
          <el-menu-item
            index="/">
              <i class="el-icon-home"></i>
              <span slot="title">首页</span>
          </el-menu-item >
          <!-- 用户管理 -->
          <el-menu-item
            route
            index="/user">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <!-- 分享功能 -->
          <el-menu-item index="/share">
            <i class="el-icon-share"></i>
            <span slot="title">分享功能</span>
          </el-menu-item>
          <!-- 信息管理 -->
          <el-menu
            default-active="1"
            active-text-color="#FF6428"
            router>
            <el-submenu>
              <template slot="title">
                <i class="el-icon-warning-outline"></i>
                <span>信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/personal">个人信息</el-menu-item>
                <el-menu-item index="/edit_personal">修改信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <!-- 资金管理 -->
          <el-menu
            default-active="2"
            active-text-color="#FF6428">
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span>资金管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">资金流水</el-menu-item>
                <el-menu-item index="1-2">区域投资</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <!-- 资金数据 -->
          <el-menu
            default-active="3"
            active-text-color="#FF6428">
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span>资金数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">投资分布</el-menu-item>
                <el-menu-item index="1-2">项目分布</el-menu-item>
                <el-menu-item index="1-3">收支分布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <!-- 权限设置 -->
          <el-menu
            default-active="4"
            active-text-color="#FF6428">
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">页面权限</el-menu-item>
                <el-menu-item index="1-2">按钮权限</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <!-- 错误页面 -->
          <el-menu
            default-active="5"
            active-text-color="#FF6428">
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-error"></i>
                <span>错误页面</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">401</el-menu-item>
                <el-menu-item index="1-2">404</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Side'
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
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

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.sideStyle {
  padding-left: 0px !important;
}
</style>
