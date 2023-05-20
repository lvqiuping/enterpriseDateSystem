<template>
  <div class="grid grid-cols-3 gap-4 my-8">
    <div class="left">
      <el-card shadow="hover" class="mb-4">
        <div class="mb-2">累计企业数</div>
        <div class="mb-2">
          <el-button v-for="(item, index) in seeNumberCopy" :key="index" type="" size="mini">{{
            item
          }}</el-button>
        </div>
        <div class="mb-2">累计人才数</div>
        <div class="mb-2">
          <el-button v-for="(item, index) in seeNumberCopy1" :key="index" type="" size="mini">{{
            item
          }}</el-button>
        </div>
        <div class="mb-2">累计项目数</div>
        <div class="mb-2">
          <el-button v-for="(item, index) in seeNumberCopy2" :key="index" type="" size="mini">{{
            item
          }}</el-button>
        </div>
      </el-card>
      <el-card shadow="hover" class="mb-4">
        <div slot="header" class="clearfix">
          <span class="">企业类型</span>
        </div>
        <div class="mb-2 grid grid-cols-2 grid-rows-2 text-center">
          <el-card v-for="(item, index) in comTypeList" :key="index" :body-style="{ padding: '0px' }" shadow="hover" class="border-0 p-2 cursor-pointer">
            <img :src="item.url" class="w-16 h-auto m-auto">
            <div>
              <div class="text-blue-400 my-2">{{ item.title }}</div>
              <div class="bottom clearfix text-xs px-4">
                {{ item.content }}
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
      <el-card shadow="hover" class="mb-4">
        <div slot="header" class="clearfix">
          <span class="">人员资质</span>
          <div style="float: right;">
            <el-select v-model="typeValue" :placeholder="options[0].label" v-loading="loading" @change="getType($event)">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div v-if="pieChartData.length" class="flex justify-center items-center"><e-pie :pie-chart-data="pieChartData" /></div>
      </el-card>
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span class="">项目数据</span>
        </div>
        <div class="flex justify-center items-center">
          <e-bar
            v-if="barChartData.actualData.lenght || barChartData.expectedData.length"
            :bar-chart-data="barChartData"
            :item-style="itemStyle"
            :emphasis="emphasis"
          /></div>
      </el-card>
    </div>
    <div class="right col-span-2">
      <el-card shadow="hover" class="mb-4">
        <e-map />
      </el-card>
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span class="">企业数据</span>
          <div class="text-xs mt-2" style="color: #606266">单位（万）</div>
        </div>
        <div class="flex justify-center items-center">
          <e-bar
            :id="'enteriseId'"
            :bar-chart-data="barChartData2"
            :item-style="itemStyle2"
            :emphasis="emphasis2"
            :height="'484px'"
          /></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import EPie from '@/components/BasicEcharts/EPie.vue'
import EBar from '@/components/BasicEcharts/EBar.vue'
import EMap from '@/components/BasicEcharts/EMap'
import { GetCmpTotalCount, GetPersonTotalCount, GetProjectTotalCount, GetRegGroupMajorCounts, GetOtherCerTypeCounts, GetProjectTypeCounts } from '@/api/home.js'
export default {
  name: 'Home',
  components: {
    EPie, EBar, EMap
  },
  data() {
    return {
      loading: false,
      seeNumberCopy: '',
      seeNumberCopy1: '',
      seeNumberCopy2: '',
      options: [{
        value: '0',
        label: '注册人员'
      }, {
        value: '1',
        label: '职称人员'
      }, {
        value: '6',
        label: '其他人员'
      }],
      typeValue: '0',
      //
      pieChartData: [],
      barChartData: {
        actualData: [],
        expectedData: []
      },
      barChartData2: {
        actualData: ['勘察企业', '设计企业', '建筑业企业', '监理企业', '设计与施工一体化企业', '造价咨询企业'],
        expectedData: [120, 200, 300, 120, 300, 150]
      },

      itemStyle: { // 渐渐变色
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#36C7E2' },
            { offset: 1, color: '#0083FF' }
          ]),
          label: {
            show: true, //
            position: 'top',
            textStyle: {
              color: 'black'
            }
          }
        }
      },
      emphasis: { // 鼠标经过样式
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#0083FF' },
            { offset: 0.7, color: '#36C7E2' }
          ])
        }
      },
      itemStyle2: { // 渐渐变色
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#B4D7FF' },
            { offset: 1, color: '#0083FF' }
          ])
        }
      },
      emphasis2: { // 鼠标经过样式
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#0083FF' },
            { offset: 0.7, color: '#B4D7FF' }
          ])
        }
      },
      comTypeList: [
        { url: require('@/assets/home/h1.png'), title: '企业数据', content: '查看企业人才数据、企业注册信息企业人才详情' },
        { url: require('@/assets/home/h2.png'), title: '人员数据', content: '查看企业人员数据、人员资料信息人才详情' },
        { url: require('@/assets/home/h3.png'), title: '项目数据', content: '查看企业人才项目数据、企业项目信息详情' },
        { url: require('@/assets/home/h4.png'), title: '数据统计', content: '查看企业人才项目数据、企业项目信息详情' }
      ]
    }
  },
  created() {
    this.getCount()
    this.getPieData()
    this.getProjectData()
  },
  methods: {
    // 累计企业数
    getCount() {
      GetCmpTotalCount().then(response => {
        this.seeNumberCopy = this.getSee(response.data)
      })
      GetPersonTotalCount().then(response => {
        this.seeNumberCopy1 = this.getSee(response.data)
      })
      GetProjectTotalCount().then(response => {
        this.seeNumberCopy2 = this.getSee(response.data)
      })
    },
    getPieData() {
      this.loading = true
      // this.typeValue // 因为返回字段是count,但是框架的字段是value,所以要转一下
      GetRegGroupMajorCounts({ cerType: this.typeValue }).then(response => {
        console.log('response', response)
     if(response.statusCode === 200){
      this.loading = false
      this.pieChartData1 = response.data
      this.pieChartData1.forEach((item) => {
      this.pieChartData.push({ name: item.name, value: item.count })
        })
     }
      })
    },
    getProjectData() {
      GetProjectTypeCounts().then(response => {
        this.barChartData1 = response.data
        this.barChartData1.forEach((item) => {
        this.barChartData.actualData.push(item.name)
        this.barChartData.expectedData.push(item.count)
        })
        console.log('this.barChartData', this.barChartData)
      })
    },
    getType(v) {
      if (v === '6') {
        this.pieChartData = []
        this.getOther()
      } else {
        this.typeValue = v
        this.pieChartData = []
        this.getPieData()
      }
    },
    getOther() {
      this.loading = true
      GetOtherCerTypeCounts().then(response => {
        if(response.statusCode === 200){
          this.loading = false
          this.pieChartData2 = response.data
          this.pieChartData2.forEach((item) => {
          this.pieChartData.push({ name: item.name, value: item.count })
        })
        }
     
      })
    },
    getSee(v) {
      const b = v.toString()
      const copy = b.split('')
      return copy
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
