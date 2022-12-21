<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :search-form="searchForm"
      :options="optionsMajorId"
      @refresh="getPageList()"
      @searchFormEmit2="searchFormEmit2"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { GetPagePersons, GetTopLevelMajors } from '@/api/staff.js'
import { getList } from '@/utils'
export default {
  name: 'EnteriseData',
  components: { BasicTable, Pagination },
  data() {
    return {
      optionsMajorId: [],
      loading: false,
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'select',
            label: '人员类别',
            name: 'majorId'
          },
          {
            type: 'input',
            label: '姓名',
            name: 'name'
          },
          {
            type: 'input',
            label: '身份证号',
            name: 'idCardNumber'
          },
          // {
          //   type: 'input',
          //   label: '电子证号',
          //   name: 'cerNumber'
          // },
          // {
          //   type: 'input',
          //   label: '注册单位',
          //   name: 'cerAwardUnit'
          // },
          {
            type: 'input',
            label: '注册号',
            name: 'cerRegNumber'
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
          label: '姓名',
          value: 'perName',
          id: 'id', // 好神奇
          show: true,
          type: 'router',
          path: 'sInfos'
        },
        {
          label: '身份证号',
          value: 'perIdNumber',
          show: true,
          type: 'text'
        },
        {
          label: '注册类别',
          value: 'regMajorName',
          show: true,
          type: 'text'
        },
        {
          label: '注册号（执业印章号）',
          value: 'cerNumber',
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
    this.get()
    // this.getPageList()
  },
  methods: {
    get() {
      GetTopLevelMajors().then((response) => {
        console.log('88', response)
        this.optionsMajorId = response.data
      })
    },
    // 获取表格数据
    getPageList() {
      this.loading = true
      getList(this, GetPagePersons, this.listQuery)
    },
    searchFormEmit2(v) {
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script>
