<template>
  <div class="border">
    <div class="flex justify-between">
      <div v-if="isOperationBtn">
        <operation-button
          :button-group="buttonGroup"
          @operateEmit="operateEmit"
        />
      </div>
      <div v-if="isSearch">
        <search-form
          :search-form="searchForm"
          :is-show="isShow"
          :options="options"
          @searchFormEmit="searchFormEmit"
        />
      </div>
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
            <router-link :to="{path: item.path, query: {companyName: scope.row[item.value], personId: scope.row[item.id], projectCode: scope.row[item.projectCode]} }" class="text-blue-400">{{ scope.row[item.value] }}</router-link>
          </div>
          <div v-else-if="item.type == 'options'">
            <el-button
              v-for="(btn, btnKey) in item.options"
              :key="btnKey"
              :type="btn.type && btn.type !== '' ? btn.type: 'primary'"
              :icon="btn.icon ? btn.icon : ''"
              size="mini"
              @click="btn.clickEvent(scope.row)"
            >
              {{ btn.text }}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SearchForm from '@/components/SearchForm/index.vue'
import OperationButton from '@/components/OperationButton/index.vue'
// import DataForm from '@/components/DataForm/index.vue'
export default {
  name: 'BasicTable',
  components: { SearchForm, OperationButton },
  props: {
    tableTitle: { type: Array, default: Array },
    tableData: { type: Array, default: Array },
    operates: { type: Object, default: Object },
    operatesWidth: { type: Number, default: 160 },
    multipleTable: { type: Boolean, default: false },
    pagination: { type: Boolean, default: true },
    showTable: { type: Boolean, default: true },
    searchForm: { type: Object, default: null },
    loading: { type: Boolean, default: false },
    isShow: { type: Boolean, default: true },
    isSearch: { type: Boolean, default: true },
    buttonGroup: { type: Object, default: null },
    isOperationBtn: { type: Boolean, default: false },
    options: { type: Array, default: null }
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
    operateEmit(v) {
      this.$emit('operateEmit2', v)
    },
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
