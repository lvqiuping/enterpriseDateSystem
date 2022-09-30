<template>
  <div>
    <div class="border-b-0">
      <search-form
        :search-form="searchForm"
        :is-show="isShow"
        @searchFormEmit="searchFormEmit"
      />
    </div>
    <el-table
      v-if="showTable"
      ref="multipleTableRef"
      v-loading="loading"
      :data="tableData"
      :row-class-name="rowClassName"
      :header-cell-style="{background: '#F3F4F6'}"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
    >
      <el-table-column v-if="multipleTable === true" type="selection" width="55" />
      <el-table-column
        v-for="(item, index) in tableTitle.filter(item2 => item2.show)"
        :key="index"
        :prop="item.value"
        :label="item.label"
        :sortable="item.sortable === true"
        align="center"
      >
        <template v-slot="scope">
          <div v-if="item.type == 'text'">
            {{ scope.row[item.value] }}
          </div>
          <div v-else-if="item.type == 'slot'">
            <slot :name="item.slot" :row="scope.row" :column="item.prop" :index="scope.$index" />
          </div>
          <div v-else-if="item.type == 'router'">
            <router-link :to="{path: item.path, query: {companyName: scope.row[item.value]} }" class="text-blue-400">{{ scope.row[item.value] }}</router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SearchForm from '@/components/SearchForm/index.vue'
export default {
  name: 'BasicTable',
  components: { SearchForm },
  props: {
    // 基本
    tableTitle: { type: Array, default: Array },
    tableData: { type: Array, default: Array },
    operates: { type: Object, default: Object },
    operatesWidth: { type: Number, default: 160 },
    multipleTable: { type: Boolean, default: false },
    pagination: { type: Boolean, default: true },
    showTable: { type: Boolean, default: true },
    searchForm: { type: Object, default: null },
    loading: { type: Boolean, default: false },
    // 特别操作
    isShow: { type: Boolean, default: true }

  },
  data() {
    return {
      selectDate: [],
      selectTableData: [],
      total: 0,
      b_data: {},
      temp: {
        orderBy: ''
      }
    }
  },
  methods: {
    rowClassName({ row, rowIndex }) {
      row.xh = rowIndex + 1
    },
    sortChange({ column, prop, order }) {
      if (order === 'ascending') {
        this.temp.orderBy = prop
      } else if (order === 'descending') {
        this.temp.orderBy = prop + ' desc'
      }
      this.$emit('sortChange', this.temp)
    },
    searchFormEmit(v) {
      this.b_data = v
      this.$emit('searchFormEmit2', this.b_data)
    },
    handleSelectionChange(val) {
      this.selectDate = val
    },
    batchDeleted() {
      this.$emit('batchDeleted', this.selectDate)
    },
    refresh() {
      this.$emit('refresh')
    }
  }
}
</script>

<style scoped>

</style>
