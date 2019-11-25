<template>
  <div>
    <el-row>
      <el-col>
        <el-card>
          <el-table
            :data="userData"
            border
            style="width: 100%"
            empty-text="暂无数据">
            <el-table-column
              prop="id"
              label="序号"
              align=center
              width="50">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户姓名"
              align=center
              width="100">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱地址"
              align=center
              fit=true>
            </el-table-column>
            <el-table-column
              prop="create_address"
              label="注册地址"
              align=center
              fit=true>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地区"
              align=center
              width="80">
            </el-table-column>
            <el-table-column
              prop="network"
              label="网络"
              align=center
              width="80">
            </el-table-column>
            <el-table-column
              prop="ip"
              label="ip地址"
              align=center
              fit=true>
            </el-table-column>
            <el-table-column
              prop="create_time"
              label="注册时间"
              align=center
              fit=true>
            </el-table-column>
            <el-table-column
              prop="login_time"
              label="登录时间"
              align=center
              fit=true>
            </el-table-column>
          </el-table>
          <el-row class="user-paging" :gutter="24" type="flex" justify="end" align="center">
            <el-col :span="12">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userData: [
        {
          id: 1,
          username: '于涛',
          email: 'h.fkpvpobupk@hrlwk.gb',
          create_address: '云南省 怒江傈僳族自治州 其它区',
          address: '西南',
          network: '铁通',
          ip: '24.58.181.182',
          create_time: '1974-10-06 09:19:43',
          login_time: '2019-11-24 11:17:22'
        },
        {
          id: 1,
          username: '于涛',
          email: 'h.fkpvpobupk@hrlwk.gb',
          create_address: '云南省 怒江傈僳族自治州 其它区',
          address: '西南',
          network: '铁通',
          ip: '24.58.181.182',
          create_time: '1974-10-06 09:19:43',
          login_time: '2019-11-24 11:17:22'
        },
        {
          id: 1,
          username: '于涛',
          email: 'h.fkpvpobupk@hrlwk.gb',
          create_address: '云南省 怒江傈僳族自治州 其它区',
          address: '西南',
          network: '铁通',
          ip: '24.58.181.182',
          create_time: '1974-10-06 09:19:43',
          login_time: '2019-11-24 11:17:22'
        },
        {
          id: 1,
          username: '于涛',
          email: 'h.fkpvpobupk@hrlwk.gb',
          create_address: '云南省 怒江傈僳族自治州 其它区',
          address: '西南',
          network: '铁通',
          ip: '24.58.181.182',
          create_time: '1974-10-06 09:19:43',
          login_time: '2019-11-24 11:17:22'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.user-paging {
  margin-top: 10px;
}
</style>
