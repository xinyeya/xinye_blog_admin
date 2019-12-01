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
              prop="create_site"
              label="注册地址"
              align=center
              fit=true>
            </el-table-column>
            <el-table-column
              prop="area"
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
                :current-page="page"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange">
              </el-pagination>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { userinfo } from '@/api/user'
export default {
  name: 'user',
  data () {
    return {
      userData: [],
      page: 1,
      total: 0,
      pageSize: 5,
      pageSizes: [5, 10, 15, 20]
    }
  },
  created () {
    this.loadUserTable(this.page, this.pageSize)
  },

  methods: {
    handleCurrentChange (val) {
      this.page = val
      this.loadUserTable(val, this.pageSize)
    },

    handleSizeChange (val) {
      this.pageSize = val
      this.loadUserTable(this.page, val)
    },

    async loadUserTable (page, pageSize) {
      try {
        let list = await userinfo(page, pageSize)
        this.userData = list.data.list
        this.total = list.data.count
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.user-paging {
  margin-top: 10px;
}
</style>
