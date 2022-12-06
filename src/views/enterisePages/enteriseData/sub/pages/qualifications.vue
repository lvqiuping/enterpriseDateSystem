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
          label: '资质类别',
          value: 'zzRange',
          show: true,
          type: 'text'
        },
        {
          label: '资质证书号',
          value: 'zzCode',
          show: true,
          type: 'text'
        },
        {
          label: '资质名称',
          value: 'zzName',
          show: true,
          type: 'text'
        },
        {
          label: '发证日期',
          value: 'zzBegTime',
          show: true,
          type: 'text'
        },
        {
          label: '发证有效期',
          value: 'zzEndTime',
          show: true,
          type: 'text'
        },
        {
          label: '发证机关',
          value: 'zzOffice',
          show: true,
          type: 'text'
        },
        {
          label: '预览',
          value: 'xh',
          show: true,
          type: 'slot',
          slot: 'check'
        }
      ]
    }
  },
  created() {
    this.listQuery.companyName = this.$route.query.companyName.trim()
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    // todo 数据字段
    getPageList() {
      getList(this, GetPageCmpZiZhis, this.listQuery)
    }
  }
}
</script>
