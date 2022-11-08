<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :search-form="searchForm"
      :loading="loading"
      class="mt-4"
      @searchFormEmit2="searchFormEmit2"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList(tabsName)" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageCmpZiZhis } from '@/api/enterise.js'
export default {
  name: 'Join',
  components: { BasicTable, Pagination },
  props: {
    tabsName: { type: String, default: '' },
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
          label: '姓名',
          value: 'id',
          show: true,
          type: 'text'
        },
        {
          label: '身份证号',
          value: 'projectName',
          show: true,
          type: 'text'
        },
        {
          label: '注册类别',
          value: 'projectAddress',
          show: true,
          type: 'text'
        },
        {
          label: '注册号（执行印章号）',
          value: 'projectType',
          show: true,
          type: 'text'
        },
        {
          label: '注册专业',
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
            type: 'text',
            label: '注册监理工程师',
            name: 'address'
          },
          {
            type: 'text',
            label: '一级注册建造师',
            name: 'projectType'
          },
          {
            type: 'text',
            label: '一级注册造价工程师',
            name: 'projectType'
          }
        ]
      }
    }
  },
  methods: {
    // 获取表格数据
    getPageList() {
      getList(this, GetPageCmpZiZhis, this.listQuery)
    },
    // suosuo
    searchFormEmit2(v) {
      v.companyName = this.companyName
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script>
