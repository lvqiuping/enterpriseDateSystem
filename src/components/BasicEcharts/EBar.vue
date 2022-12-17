<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

const animationDuration = 6000

export default {
  // mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    barChartData: {
      type: Object,
      default: Object
    },
    itemStyle: {
      type: Object,
      default: Object
    },
    emphasis: {
      type: Object,
      default: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      this.setOptions(this.barChartData, this.itemStyle, this.emphasis)
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(this.barChartData)
    },
    setOptions({ expectedData, actualData } = {}, itemStyle, emphasis) {
      this.chart.setOption({
        // title: { text: '任务获客量统计' },
        // tooltip: {
        //   trigger: 'axis'
        //   // axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //   //   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //   // }
        // },
        grid: { // 控制位置
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: actualData,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: { // x轴文字
            textStyle: {
              color: '#333333'
            },
            interval: 0,
            rotate: 40 // 文字倾斜
          },
          axisLine: { // x轴线
            show: false,
            lineStyle: {
              color: '#BDE4FF'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: { // y轴文字
            textStyle: {
              color: '#DCDCDC'
            }
          },
          axisLine: { // y轴线
            show: true,
            lineStyle: {
              color: '#BDE4FF'
            }
          }
        }],
        series: [{
          name: '项目数据',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: expectedData,
          animationDuration,
          itemStyle: itemStyle, // 样式，渐变
          emphasis: emphasis // 鼠标经过样式
        }]
      })
    }
  }
}
</script>
