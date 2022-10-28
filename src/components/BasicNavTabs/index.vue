<template>
  <div>
    <div :class="isSecondNav? 'sub' : ''">
      <el-tabs v-model="activeNames" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.label" :name="item.name" lazy />
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfosTable',
  props: {
    tabsList: { type: Array, default: null },
    activeName: { type: String, default: '' },
    isSecondNav: { type: Boolean, default: false }
  },
  data() {
    return {
      activeNames: ''
    }
  },
  created() {
    this.activeNames = this.activeName // vue规范，要接收再修改其中的值,不能直接修改props的值
  },
  methods: {
    handleClick(tab, event) {
      this.$emit('getActiveSubName', tab.name) // 这步会修改值
    }
  }
}
</script>

<style scoped>
::v-deep .el-tabs__nav-wrap::after{
  height: 0;
}
.sub{
  margin: 20px 0;
}
.sub ::v-deep .el-tabs__active-bar{
  height: 0;
}
.sub ::v-deep .el-tabs__item.is-active{
  border: 1px solid #409eff;
  color: #409eff;
  padding-left: 20px!important;
}
.sub ::v-deep .el-tabs__item{
  font-size: 16px;
  color: #aaa;
}
.sub ::v-deep .el-tabs__item:hover{
  color: #409eff;
}
</style>
