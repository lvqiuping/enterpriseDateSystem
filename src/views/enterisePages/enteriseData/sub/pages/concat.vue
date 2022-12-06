<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :search-form="searchForm"
      class="mt-4"
      @searchFormEmit2="searchFormEmit2"
    >
      <template v-slot:call="scope">
        <i class="el-icon-phone-outline text-blue-400 text-xl" />
      </template>
    </basic-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageCompanyContacts } from '@/api/enterise.js'
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
        pageSize: 15,
        companyName: ''
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
          value: 'conName',
          show: true,
          type: 'text'
        },
        {
          label: '职位',
          value: 'conRemark',
          show: true,
          type: 'text'
        },
        {
          label: '联系方式',
          value: 'conMobile',
          show: true,
          type: 'text'
        },
        {
          label: '立即拨号',
          value: 'xh',
          show: true,
          type: 'slot',
          slot: 'call'
        }
      ],
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '姓名',
            name: 'name'
          },
          {
            type: 'input',
            label: '联系方式',
            name: 'mobile'
          }
        ]
      }
    }
  },
  created() {
    this.listQuery.companyName = this.$route.query.companyName.trim()
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      getList(this, GetPageCompanyContacts, this.listQuery)
    },
    // suosuo
    searchFormEmit2(v) {
      v.companyName = this.listQuery.companyName
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script>
