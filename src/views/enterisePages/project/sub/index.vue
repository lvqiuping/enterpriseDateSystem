<template>
  <div>
    <div>
      <div class="border p-6">
        <basic-infos :company-infos="companyInfos" :infos-list="InfosList" :prjname="true" />
      </div>
      <div class="subnavbox my-8">
        <sub-nav-tabs :tabs-list="tabsList" :active-name="activeName" :project-code="projectCode" @getActiveSubNameEmit="getActiveSubNameEmit" />
      </div>
    </div>
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import SubNavTabs from '@/views/enterisePages/project/components/subNavTabs.vue'
import { GetProjectDetail } from '@/api/project.js'
export default {
  name: 'ProjectSub',
  components: { BasicInfos, SubNavTabs },
  data() {
    return {
      projectCode: '',
      tabsList: [
        { name: '工程基本信息' },
        { name: '合同登记信息' },
        { name: '竣工验收' }
      ],
      activeName: '工程基本信息',
      companyInfos: {},
      InfosList: {
        prjnum: '项目编号',
        provinceprjnum: '省级项目编号',
        buildcorpname: '建设单位',
        buildcorpcode: '建设单位统一社会信用代码',
        prjtypenum: '项目分类',
        prjpropertynum: '建设性质',
        allarea: '总面积（平方米）',
        allinvest: '总投资（万元）',
        prjapprovallevelnum: '立项级别',
        prjapprovalnum: '立项文号'
      }
    }
  },
  created() {
    this.projectCode = this.$route.query.projectCode
    this.infos()
  },
  methods: {
    // 公司信息
    infos() {
      this.loading = true
      GetProjectDetail({ projectCode: this.projectCode }).then(response => {
        this.companyInfos = response.data
      })
    },
    // tabs
    getActiveSubNameEmit(v) {
      this.activeName = v.name
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
