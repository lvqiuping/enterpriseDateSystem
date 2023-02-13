<!-- <template>
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
import { GetPageList } from '@/api/enterise.js'
import { getList } from '@/utils'
export default {
  name: 'EnteriseData',
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
            label: '信用代码',
            name: 'companyNumber'
          },
          {
            type: 'input',
            label: '企业名称',
            name: 'companyName'
          },
          {
            type: 'input',
            label: '法定代表人',
            name: 'legalPerson'
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
          label: '统一社会信用代码',
          value: 'comNumber',
          show: true,
          type: 'text'
        },
        {
          label: '企业名称',
          value: 'comName',
          show: true,
          type: 'router',
          path: 'eInfos'
        },
        {
          label: '企业法定代表人',
          value: 'comLegalPerson',
          show: true,
          type: 'text'
        },
        {
          label: '企业注册属地',
          value: 'comProvince',
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
      getList(this, GetPageList, this.listQuery)
    },
    searchFormEmit2(v) {
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script> -->
