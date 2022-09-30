<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :search-form="searchForm"
      :loading="loading"
      class="mt-4"
      @searchFormEmit2="searchFormEmit2"
    >
      <template v-slot:call="scope">
        <i class="el-icon-phone-outline text-blue-400 text-xl" />
      </template>
    </basic-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList(tabsName)" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageCmpZiZhis, GetPageCompanyProjects, GetPageCompanyContacts, GetPageCmpPerTitles, GetPageCmpPersonsByType } from '@/api/enterise.js'
export default {
  name: 'SubTable',
  components: { BasicTable, Pagination },
  props: {
    companyName: { type: String, default: '' }
  },
  data() {
    return {
      loading: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15,
        companyName: this.companyName,
        perType: 3 // 初始值
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
      ],
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '项目属地',
            name: 'address'
          },
          {
            type: 'input',
            label: '项目类别',
            name: 'projectType'
          }
        ]
      }
    }
  },
  methods: {
    // 获取表格数据
    getPageList(name) {
      if (name === 'qualifications') {
        getList(this, GetPageCmpZiZhis, this.listQuery)
      } else if (name === 'project') {
        getList(this, GetPageCompanyProjects, this.listQuery)
      } else if (name === 'concat') {
        getList(this, GetPageCompanyContacts, this.listQuery)
      } else if (name === 'perTitle') {
        getList(this, GetPageCmpPerTitles, this.listQuery)
      } else if (name === 'other') {
        getList(this, GetPageCmpPersonsByType, this.listQuery)
      }
    },
    // suosuo
    searchFormEmit2(v) {
      v.companyName = this.companyName
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList(this.tabsName)
    }
  }
}
</script>
