<template>
  <div v-show="top" class="navbar my-4 flex justify-between">
    <breadcrumb class="breadcrumb-container" />
    <!-- <div>收起搜索</div> -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      top: true
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath === '/home' || to.fullPath === '/') {
        this.top = false
      } else {
        this.top = true
      }
    }
  },
  created() {
    if (this.$route.fullPath === '/home' || this.$route.fullPath === '/') {
      this.top = false
    } else {
      this.top = true
    }
  }
}
</script>
