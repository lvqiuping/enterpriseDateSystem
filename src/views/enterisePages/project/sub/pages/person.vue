<template>
  <div>
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
    />
  </div>
</template>
<script>
import BasicTable from '@/components/BasicTable/index.vue'
import { GetProjectJoinUnits } from '@/api/project.js'
export default {
  name: 'Person',
  components: { BasicTable },
  props: {
    projectCode: { type: String, default: '' }
  },
  data() {
    return {
      loading: false,
      tableTitle: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '企业承担角色',
          value: 'corprolenum',
          show: true,
          type: 'text'
        },
        {
          label: '企业名称',
          value: 'corpname',
          show: true,
          type: 'text'
        },
        {
          label: '企业统一社会信用代码',
          value: 'corpcode',
          show: true,
          type: 'text'
        },
        {
          label: '负责人姓名',
          value: 'personname',
          show: true,
          type: 'text'
        },
        {
          label: '负责人证件号',
          value: 'personidcard',
          show: true,
          type: 'text'
        }
      ],
      listQuery: {},
      tableData: null
    }
  },
  created() {
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      this.loading = true
      this.listQuery.projectCode = this.projectCode
      GetProjectJoinUnits(this.listQuery).then(response => {
        this.loading = false
        this.tableData = response.data
      })
    }
  }
}
</script>
