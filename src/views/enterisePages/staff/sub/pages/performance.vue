<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList(tabsName)" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageList } from '@/api/enterise.js'
export default {
  name: 'SubTable',
  components: { BasicTable, Pagination },
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
          value: 'xh',
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
          value: 'projectName',
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
      getList(this, GetPageList, this.listQuery)
    }
  }
}
</script>
