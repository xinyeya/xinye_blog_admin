<template>
  <div>
    <el-row :gutter="24" type="flex" align="middle">
      <el-col :span="1">
        <img src="data:image/png;base64,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" alt="小爱admin" class="logo">
      </el-col>
      <el-col :span="4">
        <span class="title">小爱<i>Admin</i></span>
      </el-col>
      <el-col :offset="13" :span="1">
        <el-tooltip class="item" effect="dark" content="github" placement="bottom">
          <a href="https://github.com/xinyeya/xinye_blog_admin.git" target="_blank"><img class="header-img-github" src="@/assets/image/github.gif" alt="" srcset=""></a>
        </el-tooltip>
      </el-col>
      <el-col :span="1">
        <el-popover
          placement="bottom"
          trigger="hover">
          <div class="tip-tag">
            <el-tag type="success">加我微信</el-tag>
            <img src="@/assets/image/myweixin.jpg" alt="" srcset="">
          </div>
          <img slot="reference" class="header-img-github" src="@/assets/image/weixin.gif" alt="">
        </el-popover>
      </el-col>
      <el-col :span="1">
        <el-popover
          placement="bottom"
          trigger="hover">
          <div class="tip-tag">
            <el-tag type="success">加入QQ群</el-tag>
            <img src="@/assets/image/QQqun.jpg" alt="" srcset="">
          </div>
          <img slot="reference" class="header-img-github" src="@/assets/image/QQ.gif" alt="">
        </el-popover>
      </el-col>
      <el-col :span="4" type="flex" align="middle" class="header-user">
        <el-popover
          placement="bottom"
          trigger="hover">
          <div class="user-tip">
            <p @click="userInfo">个人信息</p>
            <p @click="userEdit">修改信息</p>
            <p @click="userOut">退出登录</p>
          </div>
          <div slot="reference">
            <span>您好，<b>管理员</b></span><img class="header-img-github" src="https://wx.qlogo.cn/mmopen/vi_32/un2HbJJc6eiaviaibvMgiasFNlVDlNOb9E6WCpCrsO4wMMhHIbsvTkAbIehLwROVFlu8dLMcg00t3ZtOcgCCdcxlZA/132" alt="">
          </div>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { removeStorage } from '@/utils/storge'
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    userInfo () {
      this.$router.push({ path: '/personal' })
    },
    userEdit () {
      this.$router.push({ path: '/edit_personal' })
    },
    userOut () {
      removeStorage(this.$store.state.user_key)
      removeStorage(this.$store.state.role_key)
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  font-size: 30px;
}
span i{
  color: #FF6C60;
}
.header-img-github{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 auto;
}
span b{
  color: #a9d86e;
}
.header-user{
  span{
    font-size: 14px;
  }
  img{
    width: 40px;
    height: 40px;
    vertical-align:middle
  }
}
.tip-tag{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  img{
    padding: 10px;
    width: 120px;
    height: 120px;
  }
}
.user-tip{
  padding: 5px;
  text-align: center;
  p{
    cursor: pointer;
  }
}
</style>
