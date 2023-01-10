<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :search-form="searchForm"
      @refresh="getPageList()"
      @searchFormEmit2="searchFormEmit2"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { GetPageProjects } from '@/api/project.js'
import { getList } from '@/utils'
export default {
  name: 'Project',
  components: { BasicTable, Pagination },
  data() {
    return {
      loading: false,
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '项目名称',
            name: 'projectName'
          },
          {
            type: 'input',
            label: '项目编号',
            name: 'projectCode'
          },
          {
            type: 'input',
            label: '项目类别',
            name: 'projectType'
          },
          {
            type: 'input',
            label: '建筑单位名称',
            name: 'buildCmpName'
          },
          {
            type: 'input',
            label: '地址',
            name: 'projectAddress'
          }
        ]
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
          projectCode: 'projectCode',
          show: true,
          type: 'router',
          path: 'pInfos'
        },
        {
          label: '项目编号',
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
        },
        {
          label: '地址',
          value: 'projectAddress',
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
      getList(this, GetPageProjects, this.listQuery)
    },
    searchFormEmit2(v) {
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script>
