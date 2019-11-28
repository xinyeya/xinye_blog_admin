<template>
  <div>
    <el-card>
      <p>我的权限：["admin_user"]</p>
      <p>
        <span>切换权限：</span>
        <el-radio-group v-model="admin_user" size="mini" @change="handleRole">
          <el-radio-button label="editor"></el-radio-button>
          <el-radio-button label="admin"></el-radio-button>
        </el-radio-group>
      </p>
    </el-card>
  </div>
</template>

<script>
import { saveStorage } from '@/utils/storge'
export default {
  name: 'page_right',
  data () {
    return {
      admin_user: 'admin'
    }
  },
  methods: {
    handleRole () {
      saveStorage(this.$store.state.role_key, this.admin_user)
      this.$store.commit('setRole', this.admin_user)
      this.$router.push({ name: 'error' })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
