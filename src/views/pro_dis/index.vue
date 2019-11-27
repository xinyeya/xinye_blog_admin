<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="11">
          <!-- 极坐标系下的堆叠柱状图 -->
          <ProDis
            :radiusAxis="radiusAxis"
            :legend="legend"
            :series="series">
          </ProDis>
        </el-col>
        <el-col :offset="1" :span="11">
          <!-- 极坐标系下的堆叠柱状图 -->
          <ProDis2
            :radiusAxis="radiusAxis"
            :legend="legend"
            :series="series">
          </ProDis2>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import ProDis from '@/components/ProDis'
import ProDis2 from '@/components/ProDis2'
export default {
  name: 'pro_dis',
  components: {
    ProDis,
    ProDis2
  },
  data () {
    return {
      radiusAxis: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年'],
      legend: ['储蓄', '基金', '股票', '债券', '期货'],
      series: [
        [100, 210, 310, 140, 234, 545, 546],
        [210, 420, 630, 824, 432, 452, 231],
        [331, 243, 324, 423, 434, 123, 124],
        [341, 232, 334, 432, 354, 124, 453],
        [341, 224, 312, 443, 412, 541, 545]
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
#chart_example,#chart_example2{
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
</style>
