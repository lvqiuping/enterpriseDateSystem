<template>
  <div>
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
      @refresh="getPageList()"
    >
      <template v-slot:check="scope">
        <el-button type="text">查看</el-button>
      </template>
    </basic-table>
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
          label: '数据等级',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '实际造价 （万元）',
          value: 'comName',
          show: true,
          type: 'router',
          path: 'pInfos'
        },
        {
          label: '实际面积 （平方米）',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '省级竣工备案编号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '实际竣工验收备案时间 ',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '竣工验收备案编号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '施工许可证编号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '详情',
          value: 'xh',
          show: true,
          type: 'slot',
          slot: 'check'
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
