<template>
  <div>
    <el-row>
      <!-- 日志 -->
      <el-col :span="6" class="box-card">
        <el-card>
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-s-order"></i>
              项目更新日志：
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li class="log-list-style">日期：<span>2019-08-20</span></li>
            <li class="log-list-style">更新内容：</li>
            <ul>
              <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
            </ul>
          </ul>
        </el-card>
      </el-col>
      <!-- 访问量，下载量 -->
      <el-col :offset="1" :span="17">
        <el-card>
          <div id="chart_example"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'home',
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    let myChart = echarts.init(document.getElementById('chart_example'))
    let option = {
      title: {
        text: '某地区访问量和下载量'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['访问量', '下载量']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '访问量',
          type: 'bar',
          data: [2, 4, 7, 23, 25, 76, 32, 20, 6, 3],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        },
        {
          name: '下载量',
          type: 'bar',
          data: [2, 5, 9, 26, 28, 70, 48, 18, 6, 2],
          markPoint: {
            data: [
              { name: '年最高', value: 182, xAxis: 7, yAxis: 183 },
              { name: '年最低', value: 2, xAxis: 11, yAxis: 3 }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' }
            ]
          }
        }
      ]
    }
    myChart.setOption(option)
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style lang="less" scoped>
.infinite-list{
  height: 200px;
  .log-list-style{
    list-style: none;
  }
  span{
    color: #87DE75;
  }
}
#chart_example{
    width: 800px;
    height: 290px;
    margin: 0 auto;
  }
</style>
