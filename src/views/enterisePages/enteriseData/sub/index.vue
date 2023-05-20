<template>
  <div>
    <div>
      <div class="border p-6">
        <basic-infos :company-infos="companyInfos" :infos-list="InfosList" :special-col="true" :companyname="true" />
        <div class="border">
          <div class="flex justify-around my-8">
            <div class="flex justify-start">
              <el-image :src="require('@/assets/enterise/h1.png')" fit="contain" class="w-16 h-16 ml-2" />
              <div class="ml-4">
                <div>资质项</div>
                <div class="text-blue-400">{{ summaryCount.ziZhiCount }}项</div>
              </div>
            </div>
            <div class="flex justify-start">
              <el-image :src="require('@/assets/enterise/h2.png')" fit="contain" class="w-16 h-16 ml-2" />
              <div class="ml-4">
                <div>注册人员</div>
                <div class="text-blue-400">{{ summaryCount.registerPersonCount }}名</div>
              </div>
            </div>
            <div class="flex justify-start">
              <el-image :src="require('@/assets/enterise/h3.png')" fit="contain" class="w-16 h-16 ml-2" />
              <div class="ml-4">
                <div>联系人员</div>
                <div class="text-blue-400">{{ summaryCount.contactCount }}名</div>
              </div>
            </div>
            <div class="flex justify-start">
              <el-image :src="require('@/assets/enterise/h4.png')" fit="contain" class="w-16 h-16 ml-2" />
              <div class="ml-4">
                <div>历史业绩</div>
                <div class="text-blue-400">{{ summaryCount.projectCount }}个</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-8">
        <sub-nav-tabs :tabs-list="tabsList" :active-name="activeName" :company-name="CompanyName" @getActiveSubNameEmit="getActiveSubNameEmit" />
      </div>
    </div>
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import { Get, GetCmpSummaryCount } from '@/api/enterise.js'
import SubNavTabs from '@/views/enterisePages/enteriseData/components/subNavTabs.vue'
export default {
  name: 'EInfos',
  components: { BasicInfos, SubNavTabs },
  data() {
    return {
      CompanyName: '',
      tabsList: [
        { id: 0, name: '企业资质资格' },
        { id: 1, name: '注册人员' },
        { id: 2, name: '工程项目' },
        { id: 3, name: '联系方式' },
        { id: 4, name: '职称人员' },
        { id: 5, name: '其他人员' }
      ],
      activeName: '企业资质资格',
      companyInfos: {},
      summaryCount: {},
      InfosList: {
        comCapital: '注册资本',
        comLegalPerson: '企业法定代表人',
        comNumber: '统一社会信用代码',
        comStatus: '登记状态',
        comStartDate: '成立日期',
        comOrganizeNumber: '组织机构代码',
        comType: '企业类型',
        comProvince: '企业注册属地',
        comIndustry: '行业',
        comRegisterOffice: '登记机关',
        comValidPeriod: '营业期限',
        a: '所属地区' // 什么字段？
      }
    }
  },
  created() {
    this.CompanyName = this.$route.query.companyName.trim()
    this.infos()
  },
  methods: {
    // 公司信息
    infos() {
      this.loading = true
      Get({ companyName: this.CompanyName }).then(response => {
        this.companyInfos = response.data
      })
      GetCmpSummaryCount({ companyName: this.CompanyName }).then(response => {
        this.summaryCount = response.data
      })
    },
    // tabs
    getActiveSubNameEmit(v) {
      this.activeName = v.label
    }
  }
}
</script>
<style scoped>
::v-deep .el-tabs__item{
  font-size: 18px;
  font-weight: 600;
}
::v-deep .el-tabs__active-bar{
  height: 3px;
}
::v-deep .el-tabs__nav-wrap::after{
  content: ""
}
</style>
