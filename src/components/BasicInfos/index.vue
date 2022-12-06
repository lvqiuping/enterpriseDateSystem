<template>
  <div>
    <div v-if="showCompanyName" class="flex justify-between pb-6">
      <div class="text-xl font-semibold">{{ companyInfos.comName }}</div>
      <div></div>
    </div>
    <div class="grid grid-cols-2 text-center">
      <div v-for="(item, index) in InfosList" :key="index" :class="colsTwo? 'grid grid-cols-2 text-center': 'grid grid-cols-3 text-center'">
        <div style="background-color: #f8f8f8" class="border flex justify-center items-center font-semibold p-2">{{ item }}</div>
        <div class="border flex justify-center items-center p-2" :class="colsTwo ?'':'col-span-2 border flex justify-center items-center p-2'">{{ companyInfos[index] }}</div>
      </div>
    </div>
    <div v-if="specialCol" class="grid grid-cols-4 text-center">
      <div style="background-color: #f8f8f8" class="border flex justify-center items-center font-semibold p-2">企业经营地址</div>
      <div class="border flex justify-center items-center p-2 col-span-3">{{ companyInfos.comAddress }}</div>
      <div style="background-color: #f8f8f8" class="border flex justify-center items-center font-semibold p-2">经营范围</div>
      <div class="border flex justify-center items-center p-2 col-span-3">{{ companyInfos.comRemark }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasicInfos',
  props: {
    companyInfos: { type: Object, default: Object },
    // eslint-disable-next-line vue/prop-name-casing
    InfosList: { type: Object, default: Object },
    showCompanyName: { type: Boolean, default: true },
    colsTwo: { type: Boolean, default: true },
    specialCol: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
