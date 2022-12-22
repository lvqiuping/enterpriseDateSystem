<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeNames"
      @getActiveSubName="getActiveSubName"
    />
    <div v-if="activeNames == '执业注册信息'">
      <registration />
    </div>
    <div v-else-if="activeNames == '个人工程业绩'">
      <performance />
    </div>
  </div>
</template>
<script>
import BasicNavTabs from '@/components/BasicNavTabs/index.vue'
import Registration from '@/views/enterisePages/staff/sub/pages/registration.vue'
import Performance from '@/views/enterisePages/staff/sub/pages/performance.vue'
export default {
  name: 'SubNavTabs',
  components: { BasicNavTabs, Registration, Performance },
  props: {
    tabsList: { type: Array, default: null },
    activeName: { type: String, default: '' }
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
  methods: {
    getActiveSubName(v) {
      this.activeNames = v.label // 不能直接改变props的值
    }
  }
}
</script>
