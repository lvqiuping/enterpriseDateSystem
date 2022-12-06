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
import { GetPageCmpPersonsByType } from '@/api/enterise.js'
export default {
  name: 'Qualifications',
  components: { BasicTable, Pagination },
  props: {
    perType: { type: Number, default: 0 }
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
        perType: this.perType // 初始值
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
          label: '安全管理资格类别',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '资格有效期',
          value: 'ValidYears',
          show: true,
          type: 'text'
        },
        {
          label: '发证机关',
          value: 'AwardUnit',
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
  watch: {
    'perType': {
      immediate: true,
      handler(newVal, oldValue) {
        console.log('perType?????', newVal)
        this.listQuery.perType = newVal
        this.getPageList(this.listQuery)
      }
    }
  },
  created() {
    console.log('perType', this.perType)
    console.log(this.$route.query.companyName.trim())
    this.listQuery.companyName = this.$route.query.companyName.trim()
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      getList(this, GetPageCmpPersonsByType, this.listQuery)
    }
  }
}
</script>
