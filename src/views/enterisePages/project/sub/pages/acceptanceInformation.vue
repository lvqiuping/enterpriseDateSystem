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
import { GetProjectDoneAccepts } from '@/api/project.js'
import { timestampToTime } from '@/utils'
export default {
  name: 'FilingInformation',
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
          label: '实际造价 （万元）',
          value: 'factcost',
          show: true,
          type: 'text'
        },
        {
          label: '实际面积 （平方米）',
          value: 'factarea',
          show: true,
          type: 'text'
        },
        {
          label: '结构体系',
          value: 'prjstructuretype',
          show: true,
          type: 'text'
        },
        {
          label: '施工许可证编号',
          value: 'builderlicencenum',
          show: true,
          type: 'text'
        },
        {
          label: '实际竣工验收时间',
          value: 'edate',
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
      GetProjectDoneAccepts(this.listQuery).then(response => {
        this.loading = false
        response.data.forEach((item) => {
          item.edate = timestampToTime(item.edate)
        })
        this.tableData = response.data
      })
    }

  }
}
</script>
