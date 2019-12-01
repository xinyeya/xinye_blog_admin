<template>
  <div>
    <el-card>
      <p>我的权限：["{{admin_user}}"]</p>
      <p>
        <span>切换权限：</span>
        <el-radio-group v-model="admin_user" size="mini">
          <el-radio-button label="editor"></el-radio-button>
          <el-radio-button label="admin"></el-radio-button>
        </el-radio-group>
      </p>
      <p>
        <span>Only editor can see this</span>&nbsp;
        <el-button size="mini" type="success">编辑</el-button>
        <el-button size="mini" type="info">信息</el-button>
      </p>
      <p>
        <span>Both adminand editor can see this</span>&nbsp;
        <el-button size="mini" type="primary">主要按钮</el-button>
        <el-button size="mini" type="success">成功按钮</el-button>
        <el-button size="mini" type="info">信息按钮</el-button>
        <el-button size="mini" type="warning">警告按钮</el-button>
        <el-button size="mini" type="danger">危险按钮</el-button>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'btn_right',
  data () {
    return {
      admin_user: 'editor'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
