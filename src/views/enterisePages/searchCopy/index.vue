<template>
  <div />
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.getBack()
  },
  methods: {
    getBack() {
      var query = { keywords: this.$route.query.keywords, dataType: this.$route.query.dataType }
      this.$router.replace({ name: 'search', query: query })
    }
  }
}
</script>

<style>

</style>
