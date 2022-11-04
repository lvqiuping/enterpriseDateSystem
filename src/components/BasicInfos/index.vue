<template>
  <div>
    <div v-if="showCompanyName" class="flex justify-between pb-6">
      <div class="text-xl font-semibold">{{ companyInfos.comName }}</div>
      <div>无</div>
    </div>
    <div class="grid grid-cols-2 text-center border">
      <div v-for="(item, index) in InfosList" :key="index" :class="showCompanyName? 'grid grid-cols-2 text-center': 'grid grid-cols-3 text-center'">
        <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold p-2">{{ item }}</div>
        <div class="border-b border-r flex justify-center items-center p-2" :class="showCompanyName ?'':'col-span-2 border-b flex justify-center items-center p-2'">{{ companyInfos[index] }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfosTable',
  props: {
    companyInfos: { type: Object, default: Object },
    // eslint-disable-next-line vue/prop-name-casing
    InfosList: { type: Object, default: Object },
    showCompanyName: { type: Boolean, default: true }
  }
}
</script>

<style scoped>

</style>
