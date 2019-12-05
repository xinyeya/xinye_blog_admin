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
          <el-button size="mini" :disabled="delDisabled" type="primary" @click="handleDelUserList">批量删除</el-button>
          <el-button size="mini" type="primary" @click="addMoneyForm=true">添加</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格 -->
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
              prop="nativePlace"
              label="籍贯"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="investTime"
              label="投资时间"
              sortable
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="incomeType"
              label="收支类型"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="income"
              label="收入"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: green;">+{{scope.row.income}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="expend"
              label="支出"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: red;">-{{scope.row.expend}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="accountCash"
              label="账户现金"
              align="center"
              sortable
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="color: blue;">{{scope.row.accountCash}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEditShow(scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row class="water_pagination" type="flex" justify="end">
        <el-col :span="17">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 15, 20, 25, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="count">
          </el-pagination>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表单 -->
    <el-dialog title="新增资金信息" :visible.sync="addMoneyForm">
      <el-form :model="addForm" size="mini" :rules="rules" ref="addMoneyValidateForm">
        <el-form-item label="收支类型" :label-width="formLabelWidth">
          <el-select v-model="addForm.incomeType" placeholder="请选择活动区域">
            <el-option label="提现" value="提现"></el-option>
            <el-option label="提现手续费" value="提现手续费"></el-option>
            <el-option label="提现锁定" value="理财服务退出"></el-option>
            <el-option label="购买宜定盈" value="购买宜定盈"></el-option>
            <el-option label="充值" value="充值"></el-option>
            <el-option label="优惠券" value="优惠券"></el-option>
            <el-option label="充值礼券" value="充值礼券"></el-option>
            <el-option label="转账" value="转账"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="addForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收入" prop="income" :label-width="formLabelWidth">
          <el-input v-model="addForm.income" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="expend" :label-width="formLabelWidth">
          <el-input v-model="addForm.expend" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账户现金" prop="accountCash" :label-width="formLabelWidth">
          <el-input v-model="addForm.accountCash" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="addForm.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMoneyForm = false">取 消</el-button>
        <el-button type="primary" @click="handleAddForm('addMoneyValidateForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getMoneyList, addMoneyUser, delUserList, getEditUserList, editUserList } from '@/api/money.js'
var editId = ''
export default {
  name: 'money_water',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [],
      multipleSelection: [],
      pageSize: 10,
      page: 1,
      count: 0,
      addForm: {
        username: '',
        income: '',
        expend: '',
        incomeType: '',
        accountCash: '',
        remark: ''
      },
      addEdit: true, // 判断是修改还是添加, true为添加，false为修改
      formLabelWidth: '120px',
      addMoneyForm: false,
      delDisabled: true,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, message: '长度不能少于两个字符', trigger: 'blur' }
        ],
        income: [
          { required: true, message: '收入不能为空', trigger: 'blur' }
        ],
        expend: [
          { required: true, message: '支出不能为空', trigger: 'blur' }
        ],
        accountCash: [
          { required: true, message: '账户现金不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.loadGetMoneyList()
  },
  watch: {
    multipleSelection (n, o) {
      this.delDisabled = false
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    // 删除的条数
    handleSelectionChange (val) {
      val.forEach(item => {
        this.multipleSelection.push(item.id)
      })
    },
    // 切换每页条数
    handleSizeChange (val) {
      this.pageSize = val
      this.loadGetMoneyList(this.page, val)
    },
    // 下一页
    handleCurrentChange (val) {
      this.page = val
      this.loadGetMoneyList(val, this.pageSize)
    },
    // 获取表格数据
    async loadGetMoneyList () {
      try {
        let moneyList = await getMoneyList(this.page, this.pageSize)
        this.tableData = moneyList.data.data
        this.count = moneyList.data.count
      } catch (e) {
        console.log(e)
      }
    },
    // 验证添加数据表单是否为空
    handleAddForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return
        }
        if (this.addEdit) {
          this.handleAddMoneySave()
        } else {
          this.handleAddMoneySave(editId)
        }
      })
    },
    // 添加用户资金数据
    async handleAddMoneySave (id) {
      try {
        if (!id) {
          let res = await addMoneyUser(this.addForm)
          if (res.data) {
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success'
            })
          } else {
            this.$notify.error({
              title: '失败',
              message: '添加失败'
            })
          }
        } else {
          let res = await editUserList(id, this.addForm)
          if (res.data) {
            this.$notify({
              title: '成功',
              message: '修改成功',
              type: 'success'
            })
          } else {
            this.$notify.error({
              title: '失败',
              message: '添加失败'
            })
          }
        }
        this.addMoneyForm = false
        this.addForm = {}
        this.loadGetMoneyList()
      } catch (e) {
        this.$message.error('系统错误')
      }
    },
    // 删除用户
    async handleDelUserList (uid) {
      try {
        var delId = uid
        if (this.multipleSelection.length !== 0) {
          delId = this.multipleSelection
        }
        let res = await delUserList(delId)
        if (res.data) {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success'
          })
          this.loadGetMoneyList()
          this.delDisabled = true
          this.multipleSelection = []
        }
      } catch (e) {
        this.$notify.error({
          title: '失败',
          message: '删除失败'
        })
      }
    },
    // 单个删除
    handleDelete (row) {
      this.handleDelUserList(row.id)
    },
    // 修改页面
    async handleEditShow (row) {
      try {
        let res = await getEditUserList(row.id)
        this.addForm = res.data
        this.addMoneyForm = true
        this.addEdit = false
        editId = row.id
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.water_pagination{
  padding-top: 10px;
}
</style>
