<template>
  <div>
    <div :class="isSecondNav? 'sub' : ''" class="mb-4">
      <el-tabs v-model="activeNames" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.count? item.name + '('+item.count+')' : item.name" :name="String(item.name)" :data-id="item.id" lazy>
          <span v-if="item.url" slot="label">
            <el-image
              style="width: 30px; height: 30px"
              :src="item.url"
              :fit="item.fit"
              class="mr-4"
            />{{ item.name }}</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasicNavTabs',
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
  watch: {
    'activeName': {
      immediate: true,
      handler(newVal, oldValue) {
        this.activeNames = newVal
      }
    }
  },

  created() {
    this.activeNames = this.activeName // vue规范，要接收再修改其中的值,不能直接修改props的值
  },
  methods: {
    handleClick(tab, event) {
      this.$emit('getActiveSubName', tab) // 这步会修改值
    }
  }
}
</script>

<style scoped>
::v-deep .el-tabs__nav-wrap::after{
  height: 0;
}
::v-deep .el-tabs__item{
 font-size: 16px!important;
 font-weight: normal!important;
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
  padding: 0 20px!important;
}
.sub ::v-deep .el-tabs__item{
  font-size: 16px;
  color: #aaa;
}
.sub ::v-deep .el-tabs__item:hover{
  color: #409eff;
}
</style>
