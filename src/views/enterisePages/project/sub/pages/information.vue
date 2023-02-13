<template>
  <div>
    <basic-infos :infos-list="InfosList" :company-infos="companyInfos" :show-company-name="false" :cols-two="false" />
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import { GetProjectDetail } from '@/api/project.js'
export default {
  name: 'Information',
  components: { BasicInfos },
  props: {
    projectCode: { type: String, default: '' }
  },
  data() {
    return {
      companyInfos: {},
      InfosList: {
        prjcode: '项目代码',
        prjnum: '项目编号',
        prjtypenum: '项目分类',
        a: '行政区划',
        address: '具体地点',
        b: '经维度',
        prjapprovalnum: '立项文号',
        prjapprovallevelnum: '立项级别',
        prjapprovaldepart: '立项批复机关',
        prjapprovaldate: '立项批复时间',
        buildcorpname: '建设单位',
        buildcorpcode: '建设单位统一信用社会代码',
        buildplannum: '建设用地规划许可证编号',
        projectplannum: '建设工程规划许可证编号',
        invproperty: '工程投资性质',
        prjtwodimcode: '项目二维码',
        fundsource: '资金来源',
        nationalpercenttage: '国有资金出资比例',
        allinvest: '总面积（平方米）',
        allarea: '总投资（万元）',
        alllength: '总长度（米）',
        prjpropertynum: '建设性质',
        prjsize: '建设规模',
        prjfunctionnum: '工程用途',
        ismajor: '重点项目',
        enddate: '计划竣工',
        begindate: '计划开工',
        datalevel: '数据等级',
        jzjninfo: '建筑节能信息',
        datasourcename: '数据来源',
        cxxminfo: '超限项目信息'
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
      GetProjectDetail({ projectCode: this.projectCode }).then(response => {
        response.data.b = response.data.locationx + ',' + response.data.locationy
        response.data.a = response.data.province + '-' + response.data.city + '-' + response.data.county
        this.companyInfos = response.data
      })
    }
  }
}
</script>
