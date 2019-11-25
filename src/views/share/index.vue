<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件一：横向排列</span>
          </div>
          <div class="share-card clearfix-content">
            <span>分享到：</span>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230490.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/118/1186902.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/116/1164452.gif"></el-avatar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件二：横向排列</span>
          </div>
          <div class="clearfix-content">
            <div class="share-span">邀请好友加入 >></div>
            <br>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230490.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/118/1186902.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/116/1164452.gif"></el-avatar>
            <p>朋友注册后，你会获得书币，书币可以用来去市集兑换物品。</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件三：仿简书底部分享</span>
          </div>
          <div class="share-card clearfix-content">
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230490.gif"></el-avatar>
            <el-button round>更多分享</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件四：仿简书侧边栏分享</span>
          </div>
          <div class="share-card clearfix-content clearfix-five">
            <i class="el-icon-share share-icon"></i>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件五：横向排列</span>
          </div>
          <div class="clearfix-content share-five">
            <div><el-divider>分享到</el-divider></div>
              <div class="share-card">
                <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
                <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
                <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230490.gif"></el-avatar>
                <el-avatar :size="35" src="https://static.easyicon.net/preview/118/1186902.gif"></el-avatar>
                <el-avatar :size="35" src="https://static.easyicon.net/preview/116/1164452.gif"></el-avatar>
              </div>
            </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件六：仿掘金网站分享</span>
          </div>
          <div class="clearfix-content share-juejin">
            <div class="share-juejin-title">分享</div>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230490.gif"></el-avatar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件七：仿新浪分享</span>
          </div>
          <div class="share-card clearfix-content">
            <el-avatar :size="35" src="https://static.easyicon.net/preview/123/1230528.gif"></el-avatar>
            <el-avatar :size="35" src="https://static.easyicon.net/preview/106/1065276.gif"></el-avatar>
            <i class="el-icon-share xinlang-icon"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>分享组件八：仿掘金网站分享</span>
          </div>
          <div class="share-card clearfix-content">
            <i class="el-icon-share juejin-icon"></i>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-card{
  margin: 5px;
  font-size: 13px;
}
.share-card{
  display: flex;
  align-items: center;
  justify-content: center;
}
.clearfix-content{
  height: 120px;
}
.share-icon{
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.el-divider{
  background-color: gold;
}
.share-juejin-title{
  padding: 5px;
}
.share-five{
  height: 97px;
}
.share-juejin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.xinlang-icon{
  display: inline-block;
  font-size: 35px;
  border-radius: 2px;
}
.juejin-icon{
  display: inline-block;
  font-size: 30px;
  padding: 5px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(26, 250, 41);
}
.el-avatar{
  background-color: #fff;
}
</style>
