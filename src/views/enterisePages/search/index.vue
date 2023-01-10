<template>
  <div class="app-container">
    <basic-table
      :table-title="listQuery.dataType === 0 ? tableTitle0 : listQuery.dataType === 1 ? tableTitle1 :tableTitle2"
      :table-data="tableData"
      :loading="loading"
      @refresh="getPageList()"
    />
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
  </div>
</template>
<script>
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { GetCmpByDimQuery } from '@/api/enterise.js'
import { GetPersonsByDimQuery } from '@/api/staff.js'
import { GetProjectsByDimQuery } from '@/api/project.js'
import { getList } from '@/utils'
export default {
  name: 'Search',
  components: { BasicTable, Pagination },
  data() {
    return {
      dataType: 0,
      keywords: '',
      loading: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15
      },
      tableTitle0: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '公司名称',
          value: 'comName',
          show: true,
          type: 'router',
          path: 'sInfos'
        },
        {
          label: '信用代码',
          value: 'comNumber',
          show: true,
          type: 'text'
        },
        {
          label: '省份',
          value: 'comProvince',
          show: true,
          type: 'text'
        },
        {
          label: '法人',
          value: 'comLegalPerson',
          show: true,
          type: 'text'
        }
      ],
      tableTitle1: [
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
          label: '注册号（执行印章号）',
          value: 'cerRegNumber',
          show: true,
          type: 'text'
        }
      ],
      tableTitle2: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '项目名称',
          value: 'projectName',
          show: true,
          type: 'router',
          path: 'sInfos'
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
      ]
    }
  },
  watch: {
    'dataType': {
      handler(newValue, oldValue) {
        console.log('newValue', newValue)
        // if (newValue) {
        //   this.getPageList()
        // }
      }
    },
    'keywords': {
      handler(newValue, oldValue) {
        console.log('newValue2', newValue)
      }
    }
  },
  created() {
    console.log('进来')
    this.dataType = this.$route.query.dataType
    this.keywords = this.$route.query.keywords
    this.getPageList()
  },
  methods: {
    // 获取表格数据
    getPageList() {
      this.loading = true
      this.listQuery.dataType = this.dataType
      if (this.listQuery.dataType === 0) {
        this.listQuery.keywords = this.keywords
        getList(this, GetCmpByDimQuery, this.listQuery)
      } else if (this.listQuery.dataType === 1) {
        this.listQuery.keyword = this.keywords
        getList(this, GetPersonsByDimQuery, this.listQuery)
      } else if (this.listQuery.dataType === 2) {
        this.listQuery.keyword = this.keywords
        getList(this, GetProjectsByDimQuery, this.listQuery)
      }
    }
  }
}
</script>
