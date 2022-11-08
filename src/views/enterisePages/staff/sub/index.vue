<template>
  <div>
    <div>
      <div class="border p-6">
        <infos-table :company-infos="companyInfos" />
      </div>
      <div class="subnavbox my-8">
        <sub-nav-tabs :tabs-list="tabsList" :active-name="activeName" />
      </div>
    </div>
  </div>
</template>
<script>
import InfosTable from '@/views/enterisePages/staff/sub/pages/infosTable.vue'
import SubNavTabs from '@/views/enterisePages/staff/components/subNavTabs.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'EInfos',
  components: { InfosTable, SubNavTabs },
  data() {
    return {
      companyName: this.$route.query.companyName.trim(),
      tabsList: [
        { index: 0, label: '执业注册信息', name: 'registration', url: require('@/assets/staff/s2.png'), fit: 'contain' },
        { index: 1, label: '个人工程业绩', name: 'performance', url: require('@/assets/staff/s1.png'), fit: 'contain' }
      ],
      activeName: 'registration',
      companyInfos: {}
      // InfosList: {
      //   comCapital: '证件类型',
      //   comLegalPerson: '证件号码',
      //   comNumber: '照片',
      //   comStatus: '性别',
      //   comStartDate: '毕业院校',
      //   comOrganizeNumber: '出生日期',
      //   comType: '民族',
      //   comRegisterOffice: '籍贯',
      //   comIndustry: '联系电话',
      //   a: '学历',
      //   b: '专业',
      //   c: '联系电话',
      //   d: '政治面貌',
      //   e: '现居地',
      //   f: '注册证书所在单位名称'
      // }
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
    handleClick(tab, event) {
      this.activeName = tab.name
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
