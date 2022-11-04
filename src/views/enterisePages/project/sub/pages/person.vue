<template>
  <div>
    <basic-table
        :table-title="tableTitle"
        :table-data="tableData"
        :loading="loading"
        :is-search="false"
        @refresh="getPageList()"
      />
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import BasicTable from '@/components/BasicTable/index.vue'
import Pagination from '@/components/BasicTable/Pagination.vue'
import { GetPageList } from '@/api/enterise.js'
import { getList } from '@/utils'
export default {
  name: 'EInfos',
  components: { BasicTable, Pagination },
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
          value: 'comName',
          show: true,
          type: 'router',
          path: 'pInfos'
        },
        {
          label: '企业名称',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '企业统一社会信用代码',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '负责人姓名',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '负责人证件号',
          value: 'xh',
          show: true,
          type: 'text'
        }
      ],
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15
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
      getList(this, GetPageList, this.listQuery)
    }
  }
}
</script>
