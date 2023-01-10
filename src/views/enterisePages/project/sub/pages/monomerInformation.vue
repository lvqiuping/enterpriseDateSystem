<template>
  <div>
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :is-search="false"
    />
  </div>
</template>
<script>
import BasicTable from '@/components/BasicTable/index.vue'
import { GetProjectSingleInfos } from '@/api/project.js'
export default {
  name: 'MonomerInformation',
  components: { BasicTable },
  props: {
    projectCode: { type: String, default: '' }
  },
  data() {
    return {
      loading: false,
      tableTitle: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '单体建（构）筑物名称',
          value: 'subprjname',
          show: true,
          type: 'text'
        },
        {
          label: '工程总造价（万元）',
          value: 'invest',
          show: true,
          type: 'text'
        },
        {
          label: '建筑面积（平方米）',
          value: 'buildarea',
          show: true,
          type: 'text'
        },
        {
          label: '建筑高度（米）',
          value: 'buildheight',
          show: true,
          type: 'text'
        },
        {
          label: '结构体系',
          value: 'structuretypenum',
          show: true,
          type: 'text'
        },
        {
          label: '工程等级',
          value: 'prjlevelnum',
          show: true,
          type: 'text'
        }
      ],
      tableData: null,
      listQuery: {
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
      this.listQuery.projectCode = this.projectCode
      GetProjectSingleInfos(this.listQuery).then(response => {
        this.loading = false
        this.tableData = response.data
      })
    }
  }
}
</script>
