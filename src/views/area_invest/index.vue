<template>
  <div>
    <el-row>
      <el-col>
        <el-card>
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i>华东区域</span>
              <AreTable :counter="east"></AreTable>
              <ArePaging></ArePaging>
            </el-tab-pane>
            <el-tab-pane label="华南区域"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="华中区域"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="华北区域"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="西北区域"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="西南地区"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="东北地区"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
            <el-tab-pane label="台港地区"><AreTable :counter="tableData"></AreTable><ArePaging></ArePaging></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AreTable from '@/components/AreTable'
import ArePaging from '@/components/ArePaging'
export default {
  name: 'area_invest',
  components: {
    AreTable,
    ArePaging
  },
  data () {
    return {
      east: [
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        }
      ],
      south: [
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        }
      ],
      tableData: [
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        },
        {
          id: 1,
          province: '山东省',
          invest_all: '5690',
          earnings: '3940',
          project: '贵金属',
          invest_period: '18个月',
          invest_people_num: '4792',
          invest_year_change: '5%',
          remarks: '倾向于投资白银'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
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

</style>
