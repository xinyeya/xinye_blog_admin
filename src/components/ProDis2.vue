<template>
  <div>
    <div id="chart_example2"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ProDis2',
  props: ['radiusAxis', 'legend', 'series'],
  data () {
    return {
      series_data: []
    }
  },
  mounted () {
    this.series_common()
    this.index()
  },
  methods: {
    // 极坐标系下的堆叠柱状图
    index () {
      let myChart = echarts.init(document.getElementById('chart_example2'))
      let option = {
        angleAxis: {
          type: 'category',
          data: this.radiusAxis,
          z: 10
        },
        radiusAxis: {
        },
        polar: {
        },
        series: this.series_data,
        legend: {
          show: true,
          data: this.legend
        }
      }
      myChart.setOption(option)
    },
    series_common () {
      if (this.series.length !== this.legend.length) {
        this.$notify({
          title: '警告',
          message: '数据不合法',
          duration: 0
        })
        return
      }
      for (let i = 0; i < this.series.length; i++) {
        this.series_data.push({
          type: 'bar',
          data: this.series[i],
          coordinateSystem: 'polar',
          name: this.legend[i],
          stack: 'a'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
#chart_example2{
  width: 100%;
  height: 500px;
  margin: 0 auto;
}
</style>
