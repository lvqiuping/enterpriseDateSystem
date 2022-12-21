<template>
  <div>
    <div class="flex justify-between pb-6">
      <div class="text-xl font-semibold"></div>
      <div>{{ companyInfos.perProvince }}</div>
    </div>
    <div class="border">
      <div class="grid grid-cols-6  text-center">
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold ">证件类型</div>
        <div class="border-b flex justify-center items-center  "></div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold">证件号码</div>
        <div class="border-b flex justify-center items-center  col-span-2 ">{{ companyInfos.perIdCardEncrypted }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold   row-span-2 h-40"><el-image :src="companyInfos.inchPicPath" /></div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold ">性别</div>
        <div class="border-b flex justify-center items-center  ">{{ companyInfos.gender }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">毕业院校</div>
        <div class="border-b flex justify-center items-center col-span-2  ">{{ companyInfos.perGraduationSchool }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  "> 出生日期</div>
        <div class="border-b flex justify-center items-center  ">{{ companyInfos.birthday }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">民族</div>
        <div class="border-b flex justify-center items-center  "></div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">籍贯 </div>
        <div class="border-b flex justify-center items-center  "></div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">联系电话</div>
        <div class="border-b flex justify-center items-center  ">{{ companyInfos.perMobile }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">学历</div>
        <div class="border-b flex justify-center items-center  ">{{ companyInfos.perEducation }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">专业</div>
        <div class="border-b flex justify-center items-center  ">{{ companyInfos.perMajor }}</div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold  ">政治面貌</div>
        <div class="border-b flex justify-center items-center  "></div>
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold">现居地</div>
        <div class="border-b flex items-center p-4 text-left">{{ companyInfos.perAddress }}</div>
      </div>
      <div class="grid grid-cols-6 text-center">
        <div style="background-color: #f8f8f8" class="border-b flex justify-center items-center font-semibold">注册证书所在单位名称</div>
        <div class="border-b flex flex-wrap justify-center items-center col-span-5 p-4 text-left">{{ companyInfos.cerAwardUnit }}</div>
      </div>
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
