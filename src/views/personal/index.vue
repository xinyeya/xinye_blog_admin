<template>
  <div>
    <el-card>
      <el-row class="per-one">
        <!-- 头像上传 -->
        <el-col :span="4" type="flex" align="middle">
          <div class="image-upload">
            <p><el-avatar class="image" :size="100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgASwBLAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VAAYqtfXUVhbTTzOI4Y1Lux6ACrAyBzXnXxh8ZReFPDl3dyN+7tY1l2/wB+UnES/wDfQL/9s/emld2BK7sfM37WPxrv5ZJdBtblrSPJNwFODGuP9X/vf3vrj1FfHNtbap4nvHh0yzluMnBKjI/Guz8U3F54/wDGa2e9pJr6fLseoXOTX2B8KvhdpfhbQrdIrWMOFGWK8/jXozrLCQUUtWerTpq2ux8U2v7NnjfXFMosfIj65kOCaxtb+AvjPQfmksJJURuWj5r9NJLWOJVAAHHasy+0uC8jZJIgQwwciuJZhVvqbqMOx+f/AIDtvFGk6uFitVjcL9ySTkYFfa/wr/ae1WytrOx8Y2cdwiqI5L6yUiWI9MuhPzD1Iwf9k14x8avBlz4VnbXdKQAxHcUxxx2rP8LeJLXx3oMerWZEN3CfLuo2OWjb1P8AeU+/Ye1dPtFXjzWIq0oyR+iGmana6xYQXllOlzazqHjljOVYGrew+tfOP7O3jZ4LxdJaUrZT5Q2zHiCcc/Ln+FufxxX0gFyK5JKzseNOHJKw9j1r5H/a38VfaNRj0SOQrBap9qucfxORhR+C/wDoRr6zmkEasWIAAySa/N79o7xvHqnjnXZIpd8JnYhgfvgcL+grWhHmmjejHmbZx/wqsdQfxRe65b6VNqkdu3lDyhwp6n+lfW/wy+IcfiuV9Pk0e90q6hTJFymFb1wa+LPh/wCK/E1hoU7aSqx27CW5QyQyv9ok3hfLXYDg4Gcn09TX0V+zT4l8T+JprWbXNNn02VN5kSdWAC4OMFgM84/MVOMTbcnb7z14RThvqen/ABN8X6v4RgifSdDl1p2PzpG+3YPWvOY/j1riXAGoeAtXgtuN00OJCP8AgP8A9et741eM9Q0W1nl0+1mvJMhFWJSQCeMsQDtUdzXzroPx68SaD4/utOvrKLUbW3kCST6ddeeh5xlQQC45H3RnHauOnTc4t8t/mbxjFRV3qz6buLvTPif4OvJLEs25GR4Zoykkb4+6ynkGvi3w5qUvw9+IN5aAulrM5jli6AjP8x1r9AtHltb/AE6G/hgEcs8YLZTaxGOh/wDr18O/tFWFtovxRk2AIJ8SfQmunBSTm6fcwnflb7Hsfw78Qva+IoZLeQfMAVZezg5Vv0/WvuvRdUTV9Is72PhZ4lkAz0yOlfml8MNSI1CAE+hGfqP6j9a+udE+Id1pOl29pA/7qMELz2JJ/rWmIXLJI4alP2iTR2Hx6+Klj4C8LXEJdZdRuUxHbg87c4LN6L29+lfl18SvEVxqV/e3LE75WL+mSc19p+NdLTWdH1TxR4ilaRpw0dpHIOXbHLY9FBwPQkehr4Q+Impm41O6fA2GX5QOyjjA9u1bYTVtrc2hCNOnY/Qn4b+ALLwl4J0yxgT5YoFUt6nHJ/HrXfaNoos7QyxqA0o6+i9vzrK8EXMer+A9Ev0bcl1ZxTKfUMgI/nXP+IYtOvItV0mS8uYI9S2rO1tePE6sqqqlCrAo2FXlcZwM14j5pNnYoyqO0TdutNje5bzEy3fjpT7TwrYyyhxbxhieu0Zq5YxyXE2+aQyMwC5bk8dM+prZitTAAw5FZXadh81lYguLWO0tAEwAB0x0r4C/aa0241T4k3ksamSOFRuPZRivu7xPfPbWTbeDivk/4x+H7uKIarbWtxc3d5M7yskZMUcQIA3N0DE4x9DXdhanJUuEaanF3PNPgzqT3evWMaSiZkJRueSOxP0OK+j11sooUTldoCkE4wRweK+SPhDcG28dxzp8kAu+dvTYWwf0NfUgjgm/eSr+8bltpwM/SvUxUbyTOam2loVf2gviGuszfYrPbBZwr5UMadFX1/z65718mePNLNnBHLMu2SbJVT2Xt/WvobS9KtdZ8NeI/E+ozKzWLQxW1u3RmdsFz7AA/ifavnz4p62mqarlCfLVOB6Z5x+WK3opR91dDJ25bn21+zF4kfxz+z3pNra3ht76wibTXkTBaIxnavXvs2H8aytV+D+sedIq+ItU81jkYmh2/hlf5ivmf9kb48Wnwp8cT6VrtyLbw1rLKslxIfktZxwkh9FYfKx/3SeAa/RNY9J1O3jvIp4riORQ6TROGVwehBHBFeTX58NUdlo9T0sHjZ4a/J1OC+GeheKPD8Qh1rWf7Wt8fu1kRfMj+rqACPbH416gl0NoXPArnr/XdL0lC0l1GoHYsK4/VvixaMXh01Tcy9Mr0H4150pczuTU5683Jrcr/Hbxsvhvw7cyQyKs5RipPRQByx+gr4t1v9q3V/Enho6NB4ftob2QGE3wnkcOvQHyegbHqSPavRP2nPEt2vhO4FzMRcXhEfsidwP1r5Y0+QjYE/cxnggH5mHuf8ivawVCE488lcwrSlRtCLPSfAFu2nOHdh9ocjcQc7eec+9fW9hBJe2MFxFHvSVA4I46jJH4HivkPwtcLbkMx6EYr6N0Dxitno1rD5u3YmMYz3rrxMXJpozpbWPLtY1v/igNPlFxIMzNbTQdmAZmj+uMuef+eleGeI7kzTO2OO30rrdYnkGiMgc7BcsQP+A//WrgNUJJYZ4BNdEFYyn0Oe1BjkjqCOtfQ37DPi6dPHeseGprqY2V1ZfaIoDIdgkRwDhegJEhz/u1866oxDDHvXpX7IMzx/tBeHwrEB47hWx3HlMcfmBWeKXNQkn2IotxqJo++9b8PWyyAiEFmP1qkllFYLwAp6+9dbqo/eA47V4N+0t4i1Lw34B1G50y7eznC4EkeMjJA7/WvkKcXOSinue8pWjqeSftWeLLS9v7XTLe4SSeL55I0Odg7Z9OleGWUxjwWJKn86+nfg/8EfBfiv8AZ+n8V6to7XviBoppGvJLycFmBOCVDhSfwr5ue2ij0+VlXBB4596+vwqjTh7NdDw6lT2s3I6vQr1XtWIOWHQZ713mneMDDYwo7yBlXBweK8k8PyulwgDHBYAj8a7SIlUwDgAkAfjW8lccW0tD/9k="></el-avatar></p>
            <p><el-button class="image-upload-btn" size="mini" type="success">上传<i class="el-icon-upload el-icon--right"></i></el-button></p>
          </div>
        </el-col>
        <!-- 个人信息 -->
        <el-col :span="5">
          <div class="user-detail">
            <div class="user-text">
              <div>姓名：王小川</div>
              <div>昵称：PW68061826</div>
              <div>投资年限：5年</div>
              <div>绑定邮箱：9061446xx@qq.com</div>
              <div>绑定手机：189xxxx9028</div>
            </div>
            <div class="el-button">
              <i class="el-icon-s-claim"></i>
              签到有礼
            </div>
          </div>
        </el-col>
        <!-- 邀请好友得现金 -->
        <el-col :span="9">
          <div class="invite">
            <div class="invite-img">
              <span>可用现金：</span><img src="http://118.126.117.130/permission/static/img/toMPic02.3ef8fa17.png" alt="" srcset="">
            </div>
            <div class="invite-btn">
              <span><b>0.00</b>元</span>
              <el-button size="mini" type="success">成功按钮</el-button>
              <el-button size="mini" type="info">信息按钮</el-button>
              <el-button size="mini" type="danger">危险按钮</el-button>
            </div>
            <div class="invite-link">
              <p>您的每笔交易资金，都将接受银行全程存管 <a>了解资金存管 》</a></p>
            </div>
          </div>
        </el-col>
        <!-- 个人数据 -->
        <el-col :span="5">
          <!-- 个人数据 -->
          <div class="user-fans">
            <div class="user-fans-btn">
              <i class="el-icon-s-claim"></i>
              个人数据
            </div>
            <div class="user-fans-num">
              <div>
                <span>20</span>
                <p>投资数量</p>
              </div>
              <div>
                <span>20</span>
                <p>投资数量</p>
              </div>
              <div>
                <span>20</span>
                <p>投资数量</p>
              </div>
            </div>
            <div class="user-fans-link">
              谢谢您的关注，<a href="#">了解我的更多个人信息 》</a>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 待收资产 -->
      <el-row>
        <el-col class="due" :span="6">
          <div class="due-money">
            <h4><i class="fa fa-money"></i>待收资产</h4>
            <p><i>￥</i> <span>78.00</span></p>
            <div class="due-money-btn">
              查看详情 》
            </div>
          </div>
        </el-col>
        <el-col class="due" :span="6">
          <div class="due-money">
            <h4><i class="fa fa-money"></i>账户总资产</h4>
            <p><i>￥</i> <span>2078.00</span></p>
            <div class="due-money-btn active">
              查看详情 》
            </div>
          </div>
        </el-col>
        <el-col class="due" :span="6">
          <div class="due-money">
            <h4><i class="fa fa-money"></i>已得回报</h4>
            <p><i>￥</i> <span>1000.00</span></p>
            <div class="due-money-btn">
              查看详情 》
            </div>
          </div>
        </el-col>
        <el-col class="due" :span="6">
          <div class="due-money">
            <h4><i class="fa fa-money"></i>期待回报</h4>
            <p><i>￥</i> <span>3000.00</span></p>
            <div class="due-money-btn active">
              查看详情 》
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.per-one{
  .el-col{
    height: 180px;
    border: 1px solid #ccc;
    margin: 4px;
    padding: 5px;
  }
  .user-detail{
    font-size: 14px;
    div{
      line-height: 25px;
    }
    .el-button{
      width: 100%;
      line-height: 10px;
      font-size: 14px;
      margin-top: 10px;
      text-align: center;
      background-color: #3bc5ff;
      color: #fff;
    }
    .el-button:hover{
      background-color: #e6a23c;
    }
  }
}
.invite{
  padding: 10px;
  .invite-img{
    display: flex;
    align-items: center;
    span{
      font-weight: bold;
    }
  }
  .invite-btn{
    padding-top: 20px;
    span{
      display: inline-block;
      padding-right: 40px;
      b{
        color: #ae0000;
      }
    }
  }
  .invite-link{
    padding-top: 30px;
    font-size: 13px;
    a{
      color: #3bc5ff;
    }
  }
}
.user-fans{
  .user-fans-btn{
    width: 100%;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 13px;
    background-color: #3bc5ff;
  }
  .user-fans-num{
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 13px;
    padding-top: 20px;
    span{
      font-weight: bold;
      color: #ae0000;
    }
    p{
      color: #3bc5ff;
    }
  }
}
.user-fans-link{
  font-size: 13px;
  margin-top: 15px;
  a{
    color: #3bc5ff;
    text-decoration: none;
  }
}
.due{
  padding: 10px;
  padding-left: 0;
  .due-money{
    margin-top: 10px 20px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: center;
    p{
      font-size: 18px;
      margin-top: 30px;
      span{
        font-weight: bold;
        color: #AE0000;
      }
    }
    .due-money-btn{
      color: #fff;
      width: 100%;
      margin-top: 15px;
      text-align: center;
      line-height: 30px;
      height: 30px;
      background-color: #3bc5ff;
      border: 1px solid #3bc5ff;
    }
    .due-money-btn:hover{
      background-color: #fff;
      color: #3bc5ff;
    }
    .active{
      background-color: #fff;
      color: #3bc5ff;
      border: 1px solid #3bc5ff;
    }
    .active:hover{
      background-color: #3bc5ff;
      color: #fff;
    }
  }
}
</style>
