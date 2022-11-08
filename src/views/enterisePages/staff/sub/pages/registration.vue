<template>
  <div class="border">
    <div class="">
      <basic-infos :company-infos="companyInfos" :infos-list="InfosList" />
    </div>
    <!-- <div class="text-xl font-semibold p-6">注册监理工程师</div>
    <div class="grid grid-rows-3 grid-cols-6  text-center">
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold ">注册单位</div>
      <div class="border-b flex justify-center items-center border-r">{{ companyInfos.comCapital }}</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">证书编号</div>
      <div class="border-b flex justify-center items-center border-r ">1</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">注册编号</div>
      <div class="border-b flex justify-center items-center border-r ">1</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">注册专业</div>
      <div class="border-b flex justify-center items-center border-r">1</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold"> 有效期</div>
      <div class="border-b flex justify-center items-center col-span-3 border-r">1</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">注册专业</div>
      <div class="border-b flex justify-center items-center border-r ">1</div>
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">有效期</div>
      <div class="border-b flex justify-center items-center border-r col-span-3 ">1</div>
    </div>
    <div class="grid grid-cols-6 text-center">
      <div style="background-color: #f8f8f8" class="border-b border-r flex justify-center items-center font-semibold">职称</div>
      <div class="border-b border-r flex flex-wrap justify-center items-center col-span-5 p-4 text-left">1</div>
    </div> -->
    <div v-if="isShow" class="foot my-10">
      <div class="flex justify-center">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
            placement="top"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="text-center text-gray-300 mt-4">查看证书变更记录（6）</div>
    </div>
    <div v-else class="foot my-10">
      <div class="text-center text-gray-300">暂无证书变更记录</div>
    </div>
  </div>
</template>
<script>
import BasicInfos from '@/components/BasicInfos/index.vue'
import { Get } from '@/api/enterise.js'
export default {
  name: 'Registration',
  components: { BasicInfos },
  data() {
    return {
      isShow: true,
      activities: [{
        content: '2010-03-14 - 初始注册 - 电力工程吉林市电力建设监理有限公司电力工程吉林市电力建设监理有限公司电力工程吉林市电力建设监理有限公司电力工程吉林市电力建设监理有限公司',
        timestamp: '2010-03-14 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-remove'
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-remove'
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-remove'
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-remove'
      }],
      companyInfos: {},
      InfosList: {
        comCapital: '注册单位',
        comLegalPerson: '证书编号',
        comNumber: '注册编号',
        comRegisterOffice: '职称',
        comStatus: '注册专业',
        comStartDate: '有效期',
        comOrganizeNumber: '注册专业',
        comType: '有效期'
      }
    }
  },
  created() {
    this.infos()
  },
  methods: {
    // 公司信息
    infos() {
      this.loading = true
      Get({ companyName: this.$route.query.companyName.trim() }).then(response => {
        this.companyInfos = response.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-timeline{
  margin-left: 15%;
}
::v-deep .el-timeline-item__content{
  width: 260px;
  font-size: 16px;
}
::v-deep .el-timeline-item__timestamp{
  position: absolute;
    left: -130px;
}
</style>
