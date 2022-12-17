<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

export default {
//   mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'pie'
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
      default: '600px'
    },
    pieChartData: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart(this.pieChartData)
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
    initChart(pieChartData) {
      this.chart = echarts.init(document.getElementById(this.id))
      const color2 = ['#0083FF',
        '#FFBE57',
        '#60D8A9',
        '#FF5A47',
        '#3C5FA1',
        '#9d9d9d',
        '#4ee9eb',
        '#a28efd',
        '#fcb5a1',
        '#845b5e'
      ]

      this.chart.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: { // 底部注释
          bottom: '0',
          left: 'left'
        },
        series: [
          {
            name: '人员资质',
            type: 'pie',
            minAngle: 20, // 文字间隙
            // color: color2,
            itemStyle: {
              normal: {
                color: item => {
                  return color2[item.dataIndex % (color2.length)] // 用完调色盘的颜色会取余调色盘重复用
                }
              }
            },
            radius: ['40%', '60%'], // 内圈外圈的大小
            center: ['50%', '40%', '50%', '50%'], // 控制图的位置
            avoidLabelOverlap: false,
            label: { // 指向注释
              show: true,
              position: 'left'
            },
            labelLine: { // 指向注释线条
              show: true
            },
            emphasis: { // 鼠标经过放大
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            data: pieChartData
          }
        ]
      })
    }
  }
}
</script>

