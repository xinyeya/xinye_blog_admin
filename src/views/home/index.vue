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
      <el-col :span="18">
        <el-card>
          <div id="chart_example"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 用户投资类型 -->
    <el-row>
      <el-col :span="7">
        <el-card>
          <div id="chart_user_type"></div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <div id="stacked_area_chart"></div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card>
          <div id="basic_radar_chart"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-card>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="USERNAME"
              width="180">
            </el-table-column>
            <el-table-column
              prop="price"
              label="PRICE"
              width="180">
            </el-table-column>
            <el-table-column
              prop="date"
              label="DATE">
            </el-table-column>
            <el-table-column
              prop="status"
              label="STATUS">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <el-row :gutter="24" v-for="i in 2" :key="i">
            <el-col :span="5">
              <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-col>
            <el-col class="home-content" :span="19">
              <h4>Jessica Hernandez</h4>
              <p>Mpcxet uvib huub kljxjnche pdccbmgfra pyummbtdsb kqvjtlgp upfsz zzw keernh jupoqhkshg akrrmtypx xlus</p>
              <p class="home-content-time">
                <i class="el-icon-alarm-clock"></i>
                1981-12-20 20:56:52
              </p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <img src="http://118.126.117.130/permission/static/img/avatar-3.9d2a0433.png" class="image">
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              vue: <el-progress :percentage="50"></el-progress>
              js: <el-progress :percentage="100" :format="format"></el-progress>
              css: <el-progress :percentage="100" status="success"></el-progress>
              html: <el-progress :percentage="100" status="warning"></el-progress>
              react: <el-progress :percentage="50" status="exception"></el-progress>
            </div>
          </div>
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
      count: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        price: '$9936.17',
        status: 'LIKE'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        price: '$9936.17',
        status: 'LIKE'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        price: '$9936.17',
        status: 'LIKE'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        price: '$9936.17',
        status: 'LIKE'
      }]
    }
  },
  mounted () {
    this.chart_example()
    this.chart_user_type()
    this.stacked_area_chart()
    this.basic_radar_chart()
  },
  methods: {
    load () {
      this.count += 2
    },
    chart_example () {
      let chartExample = echarts.init(document.getElementById('chart_example'))
      let option = {
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
      chartExample.setOption(option)
    },
    chart_user_type () {
      let chartUserType = echarts.init(document.getElementById('chart_user_type'))
      let option = {
        title: {
          text: '用户投资类型',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金', '股票', '债券', '储蓄', '期货']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金' },
              { value: 310, name: '股票' },
              { value: 234, name: '债券' },
              { value: 135, name: '储蓄' },
              { value: 1548, name: '期货' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      chartUserType.setOption(option)
    },
    stacked_area_chart () {
      let stackedAreaChart = echarts.init(document.getElementById('stacked_area_chart'))
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['股票', '基金', '债券', '储蓄', '期货']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '股票',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '基金',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '债券',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '储蓄',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '期货',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      stackedAreaChart.setOption(option)
    },
    basic_radar_chart () {
      let basicRadarChart = echarts.init(document.getElementById('basic_radar_chart'))
      let option = {
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售', max: 6500 },
            { name: '管理', max: 16000 },
            { name: '技术', max: 30000 },
            { name: '客服', max: 38000 },
            { name: '研发', max: 52000 },
            { name: '市场', max: 25000 }
          ]
        },
        series: [{
          name: '预算 vs 开销',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        }]
      }
      basicRadarChart.setOption(option)
    },
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
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
.el-card{
  margin: 5px;
}
#chart_example,#chart_user_type,#stacked_area_chart,#basic_radar_chart{
  width: 100%;
  height: 290px;
  margin: 0 auto;
}
.home-content{
  p{
    font-size: 14px;
  }
  .home-content-time{
    font-size: 16px;
    text-align: right;
    color: #87DE75;
  }
}
</style>
