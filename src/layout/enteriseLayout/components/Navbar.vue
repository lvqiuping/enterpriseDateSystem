<template>
  <div v-show="top" class="navbar my-2 flex justify-between items-center">
    <breadcrumb class="breadcrumb-container" />
    <div class="flex justify-between items-center text-sm">手机查看<el-image :src="eCodeImg" class="w-6 h-6 ml-2" /></div>
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
      top: true,
      eCodeImg: require('@/assets/layout/tel.png')
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
