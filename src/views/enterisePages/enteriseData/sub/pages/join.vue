<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      class="mt-4"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList(tabsName)" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageCmpRegMajors } from '@/api/enterise.js'
export default {
  name: 'Join',
  components: { BasicTable, Pagination },
  props: {
    tabsName: { type: String, default: '' },
    activeId: { type: Number, default: 0 }
  },
  data() {
    return {
      loading: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15,
        companyName: '',
        MajorParentId: ''
      },
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
          show: true,
          type: 'text'
        },
        {
          label: '身份证号',
          value: 'perIdCard',
          show: true,
          type: 'text'
        },
        {
          label: '注册号（执行印章号）',
          value: 'cerNumber',
          show: true,
          type: 'text'
        },
        {
          label: '注册专业',
          value: 'cerMajor',
          show: true,
          type: 'text'
        }
      ]
    }
  },
  created() {
    this.listQuery.companyName = this.$route.query.companyName.trim()
    this.listQuery.MajorParentId = this.activeId
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      getList(this, GetPageCmpRegMajors, this.listQuery)
    }
  }
}
</script>
