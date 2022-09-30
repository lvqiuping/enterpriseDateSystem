<template>
  <div id="app">
    <div :id="id" :ref="id" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import chinamap from 'echarts/map/json/china.json'
export default {
  props: {
    id: {
      type: String,
      default: 'echart_china'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '900px'
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    // 1. 创建一个 ECharts 实例，返回 echartsInstance，不能在单个容器上初始化多个 ECharts 实例
    this.myChart = echarts.init(this.$refs.echart_china)

    this.init()
  },
  methods: {
    /*
      显示中国地图
    */
    init() {
      // 2. 注册可用的地图，只在 geo 组件或者map图表类型中使用
      echarts.registerMap('china', chinamap) // 用导入的json文件注册一个name:china的地图组件

      // 3. 设置图表 option
      var option = {
        geo: {
          type: 'map',
          map: 'china' // 使用 registerMap 注册的地图名称
        }
      }
      console.log('option1:', option)

      // 只显示一个地图的时候，用option,option2都可以。如果要在地图上加散点图，用 option
      var option2 = {
        title: {
          text: '全国建筑公共大数据',
          subtext: '统计时间：(2022-09.01-至今)',
          left: 'center',
          textStyle: { fontSize: 28 }
        },
        legend: {
          orient: 'vertical',
          top: 50,
          left: 'left',
          data: ['1', '2']
        },
        series: [
          {
            type: 'map',
            map: 'china' // 使用 registerMap 注册的地图名称
          }
        ]
      }
      console.log('option2:', option2)

      // 4. 显示地图
      this.myChart.setOption(option2) // 用 option 和 option2 效果一样
    }
  }
}
</script>

<style scoped>
#echart_china {
  width: 100%;
  height: 800px;
}
</style>
