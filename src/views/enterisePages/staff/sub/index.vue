<template>
  <div>
    <div>
      <!-- <div class="text-right flex justify-end items-center mb-2">手机查看<el-image :src="require('@/assets/enterise/tel.png')" class="w-6 h-6 ml-2" /></div> -->
      <div class="border p-6">
        <infos-table :company-infos="companyInfos" />
      </div>
      <div class="subnavbox my-8">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in tabsList" :key="index" :name="item.name" lazy>
            <span slot="label"><el-image
              style="width: 30px; height: 30px"
              :src="item.url"
              :fit="item.fit"
              class="mr-4"
            /> {{ item.label }}</span>

            <sub-nav-table v-if="activeName === 'performance'" :company-name="companyName" />
            <sub-nav-infos v-else-if="activeName === 'registration'" :company-name="companyName" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import InfosTable from '@/views/enterisePages/staff/components/infosTable.vue'
import SubNavTable from '@/views/enterisePages/staff/components/subNavTable.vue'
import SubNavInfos from '@/views/enterisePages/staff/components/subNavInfos.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'EInfos',
  components: { InfosTable, SubNavTable, SubNavInfos },
  data() {
    return {
      companyName: this.$route.query.companyName.trim(),
      tabsList: [
        { index: 0, label: '执业注册信息', name: 'registration', url: require('@/assets/staff/s2.png'), fit: 'contain' },
        { index: 1, label: '个人工程业绩', name: 'performance', url: require('@/assets/staff/s1.png'), fit: 'contain' }
      ],
      activeName: 'qualifications',
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
      Get({ companyName: this.$route.query.companyName.trim() }).then(response => {
        this.companyInfos = response.data
      })
    },
    // tabs
    handleClick(tab, event) {
      this.activeName = tab.name
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
