<template>
  <div>
    <div>
      <div class="border p-6">
        <basic-infos :company-infos="companyInfos" :infos-list="InfosList" :special-col="true" />
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
      <div class="subnavbox my-8">
        <sub-nav-tabs :tabs-list="tabsList" :active-name="activeName" @getActiveSubNameEmit="getActiveSubNameEmit" />
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
      tabsList: [
        { index: 0, label: '企业资质资格', name: 'qualifications' },
        { index: 1, label: '注册人员', name: 'join' },
        { index: 2, label: '工程项目', name: 'project' },
        { index: 3, label: '联系方式', name: 'concat' },
        { index: 4, label: '职称人员', name: 'perTitle' },
        { index: 5, label: '其他人员', name: 'other' }
      ],
      activeName: 'qualifications',
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
    this.infos()
  },
  methods: {
    // 公司信息
    infos() {
      this.loading = true
      Get({ companyName: this.$route.query.companyName.trim() }).then(response => {
        this.companyInfos = response.data
      })
      GetCmpSummaryCount({ companyName: this.$route.query.companyName.trim() }).then(response => {
        this.summaryCount = response.data
      })
    },
    // tabs
    getActiveSubNameEmit(v) {
      this.activeName = v
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
