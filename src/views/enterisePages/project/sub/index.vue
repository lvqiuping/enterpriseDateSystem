<template>
  <div>
    <div>
      <div class="border">
        <basic-infos :company-infos="companyInfos" :infos-list="InfosList" />
      </div>
      <div class="subnavbox my-8">
        <sub-nav-tabs :tabs-list="tabsList" :active-name="activeName" @getActiveSubNameEmit="getActiveSubNameEmit" />
      </div>
    </div>
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import SubNavTabs from '@/views/enterisePages/project/components/subNavTabs.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'ProjectSub',
  components: { BasicInfos, SubNavTabs },
  data() {
    return {
      companyName: this.$route.query.companyName.trim(),
      tabsList: [
        { index: 0, label: '工程基本信息', name: 'basicInformation' },
        { index: 1, label: '合同登记信息', name: 'registrationInformation' },
        { index: 2, label: '竣工验收', name: 'completionAcceptance' }
      ],
      activeName: 'basicInformation',
      companyInfos: {},
      InfosList: {
        comCapital: '项目编号',
        comLegalPerson: '省级项目编号',
        comNumber: '建设单位',
        comStatus: '建设单位统一社会信用代码',
        comStartDate: '项目分类',
        comOrganizeNumber: '建设性质',
        comType: '总面积（平方米）',
        comRegisterOffice: '总投资（万元）',
        comIndustry: '立项级别',
        a: '立项文号'
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
