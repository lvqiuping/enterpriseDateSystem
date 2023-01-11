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
import { GetProjectContacts } from '@/api/project.js'
export default {
  name: 'RegistrationInformation',
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
          label: '数据等级',
          value: 'datalevel',
          show: true,
          type: 'text'
        },
        {
          label: '省级合同备案编号',
          value: 'provincerecordnum',
          show: true,
          type: 'text'
        },
        {
          label: '合同类别',
          value: 'contracttypenum',
          show: true,
          type: 'text'
        },
        {
          label: '合同等级编号',
          value: 'recordnum',
          show: true,
          type: 'text'
        },
        {
          label: ' 合同金额 （万元）',
          value: 'contractmoney',
          show: true,
          type: 'text'
        },
        {
          label: '发包单位名称',
          value: 'propietorcorpname',
          show: true,
          type: 'text'
        },
        {
          label: '承包单位名称',
          value: 'contractorcorpname',
          show: true,
          type: 'text'
        }
      ],
      tableData: null,
      listQuery: {
      }
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
      GetProjectContacts(this.listQuery).then(response => {
        this.loading = false
        this.tableData = response.data
      })
    }
  }
}
</script>
