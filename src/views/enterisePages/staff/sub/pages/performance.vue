<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { GetPerProjects } from '@/api/staff.js'
import { getList } from '@/utils'

export default {
  name: 'Performance',
  components: { BasicTable, Pagination },
  props: { personId: { type: String, default: '' }},
  data() {
    return {
      loading: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15
      },
      tableTitle: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '项目名称',
          value: 'projectName',
          show: true,
          type: 'text'
        },
        {
          label: '项目属地',
          value: 'projectAddress',
          show: true,
          type: 'text'
        },
        {
          label: '项目编码',
          value: 'projectCode',
          show: true,
          type: 'text'
        },
        {
          label: '项目类别',
          value: 'projectType',
          show: true,
          type: 'text'
        },
        {
          label: '建设单位',
          value: 'buildCompanyName',
          show: true,
          type: 'text'
        }
      ]
    }
  },
  created() {
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      this.loading = true
      this.listQuery.personId = this.personId
      getList(this, GetPerProjects, this.listQuery)
    }
  }
}
</script>
