<template>
  <div class="login">
    <el-card>
      <div class="login-title">
        <el-avatar :size="size" src="data:image/png;base64,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"></el-avatar>
          <span class="login-title-text">小爱<span>ADMIN</span></span>
      </div>
      <div class="login-form">
        <el-form
          :model="user"
          :rules="rules"
          ref="user"
          class="demo-ruleForm">
          <el-form-item
            prop="username"
          >
          <el-input
            prefix-icon="el-icon-user"
            type="text"
            v-model="user.username"
            placeholder="请输入用户名">
          </el-input>
          </el-form-item>
          <el-form-item
            prop="password"
          >
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="user.password"
            placeholder="请输入密码"
            >
          </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('user')">SIGN IN</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="tishi">
        <span>温馨提示:</span>
        <br />
        <span class="tishi-content">
          用户名为：admin/editor(可用于切换权限)
        </span>
        <br>
        <span class="tishi-content">
          密码为：123456
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      size: 30,
      rules: {
        username: [
          { required: true, message: '请输入用户名~', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码~', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/', params: { id: '1' } })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('http://118.126.117.130/permission/static/img/bg9.7d108068.jpg') no-repeat center center;
  background-size: 100% 100%;
  .login-title{
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-title-text{
      font-size: 20px;
      margin-left: 5px;
      span{
        color: #FF6C60;
      }
    }
  }
  .el-button{
    width: 400px;
    font-size: 18px;
    background-color: #FF7C1A;
    color: #fff;
    border: 1px solid #FF7C1A;
  }
  .tishi{
    font-size: 13px;
    color: #4cbb15;
    .tishi-content{
      padding-left: 60px;
    }
  }
}
</style>
