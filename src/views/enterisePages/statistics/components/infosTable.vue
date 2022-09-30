<template>
  <div>
    <div class="grid grid-rows-5 grid-cols-6 text-center">
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold ">注册资本</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comCapital }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">企业法定代表人</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comLegalPerson }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">统一社会信用代码</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comNumber }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">登记状态</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comStatus }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">成立日期</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comStartDate }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">组织机构代码</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comOrganizeNumber }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">企业类型</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comType }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">企业注册属地</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comRegisterOffice }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">行业</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comIndustry }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">登记机关</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comRegisterOffice }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">营业期限</div>
      <div class="border-b flex justify-center items-center  ">{{ companyInfos.comValidPeriod }}</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">所属地区</div>
      <div class="border-b flex justify-center items-center  ">无</div>
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold">企业经营地址</div>
      <div class="border-b flex items-center col-span-5 p-4 text-left">{{ companyInfos.comAddress }}</div>
    </div>
    <div class="grid grid-cols-6 text-center">
      <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold">经营范围</div>
      <div class="border-b flex flex-wrap justify-center items-center col-span-5 p-4 text-left">{{ companyInfos.comRemark }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfosTable',
  props: {
    companyInfos: { type: Object, default: Object }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
