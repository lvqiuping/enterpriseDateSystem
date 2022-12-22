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
import { GetPerDetailInfo } from '@/api/staff.js'
export default {
  name: 'EInfos',
  components: { InfosTable, SubNavTabs },
  data() {
    return {
      personId: this.$route.query.personId,
      tabsList: [
        { id: 0, name: '执业注册信息', url: require('@/assets/staff/s2.png'), fit: 'contain' },
        { id: 1, name: '个人工程业绩', url: require('@/assets/staff/s1.png'), fit: 'contain' }
      ],
      activeName: '执业注册信息',
      companyInfos: {}
    }
  },
  created() {
    this.infos()
  },
  methods: {
    // 公司信息
    infos() {
      this.loading = true
      GetPerDetailInfo({ personId: this.personId }).then(response => {
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
