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
          <el-button v-for="(item, index) in seeNumberCopy" :key="index" type="" size="mini">{{
            item
          }}</el-button>
        </div>
        <div class="mb-2">累计项目数</div>
        <div class="mb-2">
          <el-button v-for="(item, index) in seeNumberCopy" :key="index" type="" size="mini">{{
            item
          }}</el-button>
        </div>
      </el-card>
      <el-card shadow="hover" class="mb-4">
        <div slot="header" class="clearfix">
          <span class="font-semibold">企业类型</span>
        </div>
        <div class="mb-2 grid grid-cols-2 grid-rows-2 text-center">
          <el-card v-for="(item, index) in comTypeList" :key="index" :body-style="{ padding: '0px' }" shadow="hover" class="border-0 p-2 cursor-pointer">
            <img :src="item.url" class="w-16 h-auto m-auto">
            <div>
              <div class="text-blue-400 text-xl my-2">{{ item.title }}</div>
              <div class="bottom clearfix text-sm">
                {{ item.content }}
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
      <el-card shadow="hover" class="mb-4">
        <div slot="header" class="clearfix">
          <span class="font-semibold">人员资质</span>
          <el-button style="float: right; padding: 3px 0" type="text">注册人员</el-button>
        </div>
        <div class="flex justify-center items-center"><e-pie :pie-chart-data="pieChartData" /></div>
      </el-card>
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span class="font-semibold">项目数据</span>
        </div>
        <div class="flex justify-center items-center">
          <e-bar
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
          <span class="font-semibold">企业数据</span>
          <div>单位（万）</div>
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
export default {
  name: 'Home',
  components: {
    EPie, EBar, EMap
  },
  data() {
    return {
      seeNumber: 56823901,
      pieChartData: [
        { value: 1048, name: '注册监理工程师' },
        { value: 735, name: '注册建造师' },
        { value: 580, name: '勘察设计注册工程师' },
        { value: 484, name: '注册安全工程师' },
        { value: 300, name: '注册造价工程师' }
      ],
      barChartData: {
        actualData: ['房屋建筑工程', '市政工程', '其他'],
        expectedData: [120, 300, 150]
      },
      barChartData2: {
        actualData: ['勘察企业', '设计企业', '建筑业企业', '监理企业', '设计与施工一体化企业', '造价咨询企业'],
        expectedData: [120, 200, 300, 120, 300, 150]
      },
      itemStyle: { // 渐渐变色
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#36C7E2' },
          { offset: 1, color: '#0083FF' }
        ])
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
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#B4D7FF' },
          { offset: 1, color: '#0083FF' }
        ])
      },
      emphasis2: { // 鼠标经过样式
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#0083FF' },
            { offset: 0.7, color: '#B4D7FF' }
          ])
        }
      },
      // this.pieChartData.push(
      //       { value: res.data.type0TaskCount, name: '关键词分析' },
      //       { value: res.data.type1TaskCount, name: '同行博主分析' },
      //       { value: res.data.type2TaskCount, name: '精准视频分析' }
      //     )
      // res.data.dayCommentUserCount.forEach(element => {
      //       this.barChartData.actualData.push(element.date)
      //       this.barChartData.expectedData.push(element.userCount)
      //     })
      comTypeList: [
        { url: require('@/assets/home/h1.png'), title: '企业数据', content: '查看企业人才数据、企业注册信息企业人才详情' },
        { url: require('@/assets/home/h2.png'), title: '人员数据', content: '查看企业人员数据、人员资料信息人才详情' },
        { url: require('@/assets/home/h3.png'), title: '项目数据', content: '查看企业人才项目数据、企业项目信息详情' },
        { url: require('@/assets/home/h4.png'), title: '数据统计', content: '查看企业人才项目数据、企业项目信息详情' }
      ]
    }
  },
  created() {
    this.seeNumberCopy = this.getSee()
  },
  methods: {
    getSee() {
      const b = this.seeNumber.toString()
      const copy = b.split('')
      return copy
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
