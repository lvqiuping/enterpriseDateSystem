<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeNames"
      @getActiveSubName="getActiveSubName"
    />
    <div v-if="activeNames == 'registration'">
      <registration />
    </div>
    <div v-else-if="activeNames == 'performance'">
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
        console.log('newVal', newVal)
        this.activeNames = newVal
      }
    }
  },
  methods: {
    getActiveSubName(v) {
      this.activeNames = v // 不能直接改变props的值
    }
  }
}
</script>
