<template>
  <div>
    <div v-if="companyname" class="flex justify-between pb-6">
      <div class="text-2xl">{{ companyInfos.comName }}</div>
      <div class="text-sm">{{ companyInfos.comProvince }}</div>
    </div>
    <div class="grid grid-cols-2 text-sm border-r">
      <div v-for="(item, index) in InfosList" :key="index" :class="colsTwo? 'grid grid-cols-2 ': 'grid grid-cols-3 '">
        <div class="border border-b-0 border-r-0 p-3 text-sm flex justify-center items-center">{{ item }}</div>
        <div class="border border-b-0 border-r-0 flex p-3 items-center" :class="colsTwo ?'':'col-span-2 border border-b-0 flex items-center p-3'">{{ companyInfos[index] }}</div>
      </div>
    </div>
    <div v-if="specialCol" class="grid grid-cols-4 text-sm border-r">
      <div style="background-color: #f8f8f8" class="border border-b-0 border-r-0 p-3 flex justify-center items-center">企业经营地址</div>
      <div class="flex items-center p-3 col-span-3 border border-b-0 border-r-0">{{ companyInfos.comAddress }}</div>
      <div style="background-color: #f8f8f8" class="border border-b-0 border-r-0 flex justify-center items-center p-3">经营范围</div>
      <div class="flex items-center p-3 col-span-3 border border-b-0 border-r-0">{{ companyInfos.comRemark }}</div>
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
    companyname: { type: Boolean, default: false },
    prjname: { type: Boolean, default: false },
    colsTwo: { type: Boolean, default: true },
    specialCol: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
