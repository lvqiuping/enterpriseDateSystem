<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
      class="mt-4"
    >
      <template v-slot:check="scope">
        <el-button type="text">预览</el-button>
      </template>
    </basic-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getList } from '@/utils'
import { GetPageCmpZiZhis } from '@/api/enterise.js'
export default {
  name: 'Qualifications',
  components: { BasicTable, Pagination },
  data() {
    return {
      loading: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15,
        companyName: '',
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
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '性别',
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
          label: '职称类别',
          value: 'title',
          show: true,
          type: 'text'
        },
        {
          label: '职称等级（高）',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '所属企业',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '查看',
          value: 'xh',
          show: true,
          type: 'text'
        }
      ]
    }
  },
  created() {
    console.log(this.$route.query.companyName.trim())
    this.listQuery.companyName = this.$route.query.companyName.trim()
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      getList(this, GetPageCmpZiZhis, this.listQuery)
    }
  }
}
</script>
