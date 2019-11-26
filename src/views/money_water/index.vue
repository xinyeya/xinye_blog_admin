<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="10">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-input size="mini" v-model="formInline.user" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="mini" type="primary" @click="onSubmit">筛选</el-button>
              </el-form-item>
            </el-form>
        </el-col>
        <el-col :offset="8" :span="6">
          <el-button size="mini" disabled type="primary">批量删除</el-button>
          <el-button size="mini" type="primary">添加</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
             align="center">
            <el-table-column
              type="selection"
              width="50"
              align="center">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户姓名"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="native"
              label="籍贯"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="invest_time"
              label="投资时间"
              sortable
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="in_exp_type"
              label="收支类型"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop=""
              label="收入"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: green;">{{scope.row.income}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="支出"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: red;">{{scope.row.expend}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="账户现金"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: blue;">{{scope.row.cash_account}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row class="water_pagination">
        <el-col :offset="11">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="400">
          </el-pagination>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'money_water',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        },
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+ 6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        },
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+ 6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        },
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+ 6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        },
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+ 6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        },
        {
          username: '嘉洋',
          native: '甘肃省 白银市 靖远县',
          invest_time: '1998-12-30 19:24:37',
          in_exp_type: '购买宜定盈',
          income: '+ 6792.08',
          expend: '-5667.53',
          cash_account: '9561.24'
        }
      ],
      multipleSelection: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.water_pagination{
  padding-top: 10px;
}
</style>
