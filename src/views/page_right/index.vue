<template>
  <div>
    <el-card>
      <p>我的权限：["admin_user"]</p>
      <p>
        <span>切换权限：</span>
        <el-radio-group v-model="admin_user" size="mini">
          <el-radio-button label="editor"></el-radio-button>
          <el-radio-button label="admin"></el-radio-button>
        </el-radio-group>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'page_right',
  data () {
    return {
      admin_user: 'admin'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
