<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      @refresh="getPageList()"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { GetCmpByDimQuery } from '@/api/enterise.js'
// import { GetPagePersons, GetTopLevelMajors } from '@/api/staff.js'
// import { GetPagePersons, GetTopLevelMajors } from '@/api/staff.js'
import { getList } from '@/utils'
export default {
  name: 'Search',
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
          label: '姓名',
          value: 'perName',
          id: 'id', // 好神奇
          show: true,
          type: 'router',
          path: 'sInfos'
        },
        {
          label: '身份证号',
          value: 'perIdNumber',
          show: true,
          type: 'text'
        },
        {
          label: '注册类别',
          value: 'regMajorName',
          show: true,
          type: 'text'
        },
        {
          label: '注册号（执业印章号）',
          value: 'cerRegNumber',
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
      this.listQuery.keywords = this.$route.query
      console.log('this.listQuery.keywords', this.listQuery.keywords)
      getList(this, GetCmpByDimQuery, this.listQuery)
    }
  }
}
</script>
