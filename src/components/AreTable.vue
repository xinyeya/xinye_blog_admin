<template>
  <div>
    <el-table
      :data="counter"
      style="width: 100%"
      :header-cell-style="getRowClass">
      <el-table-column
        prop="id"
        label="序号"
        width="80"
        align="center">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="投资总额"
        sortable
        align="center">
        <template slot-scope="scope">
          <span style="color: #AE0000;">{{scope.row.invest_all}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="收益金额"
        sortable
        align="center">
        <template slot-scope="scope">
          <span style="color: rgb(0, 208, 83);">+{{scope.row.earnings}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="主要投资项目"
        align="center">
          <template slot-scope="scope">
            <el-tag type="info">{{scope.row.project}}</el-tag>
          </template>
      </el-table-column>
      <el-table-column
        prop="invest_period"
        label="投资周期"
        align="center">
      </el-table-column>
      <el-table-column
        prop="invest_people_num"
        label="投资人数"
        align="center">
      </el-table-column>
      <el-table-column
        prop="invest_year_change"
        label="投资年变化率"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="备注"
        align="center">
        <template slot-scope="scope">
          <span style="color: rgb(51, 102, 204);">{{scope.row.remarks}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AreTable',
  props: ['counter'],
  data () {
    return {
      getRowClass ({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background: #ebeef5'
        } else {
          return ''
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
