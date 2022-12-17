<template>
  <div class="app-container">
    <basic-table
      :table-title="tabsName === 'project' ? tableTitle : tabsName === 'concat' ? tableTitleConcat : tabsName === 'perTitle' ? tableTitlePerTitle : tabsName === 'other' ? tableTitleOther : tableTitleQualifications"
      :table-data="tableData"
      :search-form="tabsName === 'project' ? searchForm : tabsName === 'concat' ? searchFormConcat : tabsName === 'perTitle' ? searchFormPerTitle : tabsName === 'other' ? searchFormOther : searchFormQualifications"
      :loading="loading"
      :is-show="tabsName === 'other' ? false : true"
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
      tabName: this.tabsName, // 为了监听
      tableTitle: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '项目编码',
          value: 'id',
          show: true,
          type: 'text'
        },
        {
          label: '项目名称',
          value: 'projectName',
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
      tableTitleConcat: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '姓名',
          value: 'conName',
          show: true,
          type: 'text'
        },
        {
          label: '职位',
          value: 'conRemark',
          show: true,
          type: 'text'
        },
        {
          label: '联系方式',
          value: 'conMobile',
          show: true,
          type: 'text'
        },
        {
          label: '立即拨号',
          value: 'xh',
          show: true,
          type: 'slot',
          slot: 'call'
        }
      ],
      tableTitleQualifications: [
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
          type: 'text'
        }
      ],
      tableTitlePerTitle: [
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
          label: '职称类别用不上吧',
          value: 'title',
          show: true,
          type: 'text'
        },
        {
          label: '职称等级',
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
      ],
      tableTitleOther: [
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
      },
      searchFormConcat: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '姓名',
            name: 'name'
          },
          {
            type: 'input',
            label: '联系方式',
            name: 'mobile'
          }
        ]
      },
      searchFormQualifications: {
        show: false,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: []
      },
      searchFormPerTitle: {
        show: false,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'text',
            label: '高级工程师',
            name: 'name'
          },
          {
            type: 'text',
            label: '中级工程师',
            name: 'mobile'
          },
          {
            type: 'text',
            label: '初级工程师',
            name: 'mobile'
          }
        ]
      },
      searchFormOther: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'text',
            label: '安全三类人员',
            name: 'perType2'
          },
          {
            type: 'text',
            label: '专业岗位人员',
            name: 'perType2'
          },
          {
            type: 'text',
            label: '技术工人',
            name: 'perType2'
          },
          {
            type: 'text',
            label: '特种作业人员',
            name: 'perType2'
          }
        ]
      }
    }
  },
  watch: {
    'tabName': {
      immediate: true,
      handler(newVal, oldValue) {
        this.getPageList(newVal)
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
