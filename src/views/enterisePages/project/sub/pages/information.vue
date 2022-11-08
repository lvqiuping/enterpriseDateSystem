<template>
  <div>
    <basic-infos :infos-list="InfosList" :company-infos="companyInfos" :show-company-name="false" :cols-two="false" />
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'Information',
  components: { BasicInfos },
  data() {
    return {
      companyInfos: {},
      InfosList: {
        comCapital: '项目代码',
        comLegalPerson: '项目编号',
        comNumber: '项目分类',
        comStatus: '行政区划',
        comStartDate: '具体地点',
        comOrganizeNumber: '经纬度',
        comType: '立项文号',
        comRegisterOffice: '立项级别',
        comIndustry: '立项批复机关',
        a: '立项批复时间',
        b: '建设单位',
        b1: '建设单位统一信用社会代码',
        b2: '建设用地规划许可证编号',
        b3: '建设工程规划许可证编号',
        b4: '工程投资性质',
        b5: '项目二维码',
        b6: '资金来源',
        b7: '国有资金出资比例',
        b8: '总面积（平方米）',
        b9: '总投资（万元）',
        b11: '总长度（米）',
        b22: '建设性质',
        b33: '建设规模',
        b44: '工程用途',
        b55: '重点项目',
        b66: '计划竣工',
        b77: '计划开工',
        b88: '数据等级',
        b99: '建筑节能信息',
        ba: '数据来源',
        bb: '超限项目信息'
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
    }
  }
}
</script>
