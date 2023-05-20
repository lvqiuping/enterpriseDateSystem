<template>
  <div>
    <div class="flex justify-between pb-6">
      <div class=" text-2xl">{{ companyInfos.perName }}</div>
      <div class="text-sm">{{ companyInfos.perProvince }}</div>
    </div>
    <div class="border">
      <div class="grid grid-cols-6 text-sm">
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center">证件类型</div>
        <div class="border-b border-r flex p-3 items-center">身份证</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center">证件号码</div>
        <div class="border-b border-r flex p-3 items-center  col-span-2 ">{{ companyInfos.perIdCardEncrypted }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r-0 flex p-3 items-center justify-center row-span-2">
          <el-image fit="fill" style="width: 60px; height: 60px" :src="companyInfos.inchPicPath" />
        </div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center  justify-center">性别</div>
        <div class="border-b border-r flex p-3 items-center  ">{{ companyInfos.gender }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center   justify-center">毕业院校</div>
        <div class="border-b border-r flex p-3 items-center col-span-2  ">{{ companyInfos.perGraduationSchool }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center"> 出生日期</div>
        <div class="border-b border-r flex p-3 items-center  ">{{ companyInfos.birthday }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center  justify-center ">民族</div>
        <div class="border-b border-r flex p-3 items-center  " />
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center ">籍贯 </div>
        <div class="border-b border-r-0 flex p-3 items-center  " />
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center">联系电话</div>
        <div class="border-b border-r flex p-3 items-center  ">{{ companyInfos.perMobile }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center  justify-center ">学历</div>
        <div class="border-b border-r flex p-3 items-center  ">{{ companyInfos.perEducation }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center  ">专业</div>
        <div class="border-b border-r-0 flex p-3 items-center  ">{{ companyInfos.perMajor }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center">联系电话</div>
        <div class="border-b border-r flex p-3 items-center  ">{{ companyInfos.perMobile }}</div>
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center  justify-center ">政治面貌</div>
        <div class="border-b border-r flex p-3 items-center  " />
        <div style="background-color: #f8f8f8" class="border-b border-r flex p-3 items-center justify-center">现居地</div>
        <div class="border-b border-r-0 flex items-center p-4 text-left">{{ companyInfos.perAddress }}</div>
      </div>
      <div class="grid grid-cols-6 text-center text-sm">
        <div style="background-color: #f8f8f8" class="border-r border-b-0 flex p-3 items-center justify-center">注册证书所在单位名称
        </div>
        <div class="border-b-0 border-r-0 flex flex-wrap p-3 items-center col-span-5 text-left">{{ companyInfos.cerAwardUnit
        }}</div>
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

<style scoped></style>
