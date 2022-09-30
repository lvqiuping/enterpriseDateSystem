<template>
  <div>
    <div>
      <!-- <div class="text-right flex justify-end items-center mb-2">手机查看<el-image :src="require('@/assets/enterise/tel.png')" class="w-6 h-6 ml-2" /></div> -->
      <div class="border p-6">
        <infos-table :company-infos="companyInfos" />
        <div class="flex justify-around my-8">
          <div class="flex justify-start">
            <el-image :src="require('@/assets/enterise/h1.png')" fit="contain" class="w-16 h-16 ml-2" />
            <div class="ml-4">
              <div>资质项</div>
              <div class="text-blue-400">0项</div>
            </div>
          </div>
          <div class="flex justify-start">
            <el-image :src="require('@/assets/enterise/h2.png')" fit="contain" class="w-16 h-16 ml-2" />
            <div class="ml-4">
              <div>注册人员</div>
              <div class="text-blue-400">10名</div>
            </div>
          </div>
          <div class="flex justify-start">
            <el-image :src="require('@/assets/enterise/h3.png')" fit="contain" class="w-16 h-16 ml-2" />
            <div class="ml-4">
              <div>联系人员</div>
              <div class="text-blue-400">10名</div>
            </div>
          </div>
          <div class="flex justify-start">
            <el-image :src="require('@/assets/enterise/h4.png')" fit="contain" class="w-16 h-16 ml-2" />
            <div class="ml-4">
              <div>历史业绩</div>
              <div class="text-blue-400">10个</div>
            </div>
          </div>
        </div>
      </div>
      <div class="subnavbox my-8">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.label" :name="item.name" lazy>
            <sub-nav-table :tabs-name="activeName" :company-name="companyName" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import InfosTable from '@/views/enterisePages/enteriseData/components/infosTable.vue'
import SubNavTable from '@/views/enterisePages/enteriseData/components/subNavTable.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'EInfos',
  components: { InfosTable, SubNavTable },
  data() {
    return {
      companyName: this.$route.query.companyName.trim(),
      tabsList: [
        { index: 0, label: '企业资质资格', name: 'qualifications' },
        { index: 1, label: '注册人员', name: 'join' },
        { index: 2, label: '工程项目', name: 'project' },
        { index: 3, label: '联系方式', name: 'concat' },
        { index: 4, label: '职称人员', name: 'perTitle' },
        { index: 5, label: '其他人员', name: 'other' }
      ],
      activeName: 'project',
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
