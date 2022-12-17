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
import { GetPageCmpPerOthers } from '@/api/enterise.js'
export default {
  name: 'Qualifications',
  components: { BasicTable, Pagination },
  props: {
    cerType: { type: Number, default: 0 }
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
        cerType: this.cerType // 初始值
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
          label: '证书编号',
          value: 'cerNumber',
          show: true,
          type: 'text'
        },
        {
          label: '专业工种',
          value: 'cerMajor',
          show: true,
          type: 'text'
        },
        {
          label: '发证单位',
          value: 'cerAwardUnit',
          show: true,
          type: 'text'
        },
        {
          label: '发证日期',
          value: 'cerAwardDate',
          show: true,
          type: 'text'
        },
        {
          label: '截止日期',
          value: 'cerValidYears',
          show: true,
          type: 'text'
        }
      ]
    }
  },
  watch: {
    'cerType': {
      immediate: true,
      handler(newVal, oldValue) {
        this.listQuery.cerType = newVal
        this.getPageList(this.listQuery)
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
      getList(this, GetPageCmpPerOthers, this.listQuery)
    }
  }
}
</script>
