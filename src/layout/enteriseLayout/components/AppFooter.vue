<template>
  <div class="bg-cover bg-no-repeat bg-center py-10" :style="{ backgroundImage: `url(${bgImg})` }">
    <div class="container mx-auto text-white">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-between">
        <div class="grid grid-col">
          <div>
            <el-image style="width: 220px; height: auto" :src="require('@/assets/layout/logo.png')" fit="contain" />
          </div>
          <div class="align-center" style="width: 220px; padding: 20px;">
            <el-image style="height: auto; " :src="require('@/assets/layout/sao.png')" fit="contain" />
            <div class="" style="text-align: center; margin-top: 10px">
              扫一扫&nbsp;&nbsp;&nbsp;关注我们
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-lg mb-4">常见问题</div>
          <div class="">
            <ul class="p-0">
              <li v-for="(item, index) in problemList" :key="index" class="mb-2 list-none">{{ item.content }}</li>
            </ul>
          </div>
        </div>
        <div class="col-span-2">
          <div class="text-lg mb-4">关于我们</div>
          <div class="">
            <ul class="p-0">
              <li v-for="(item, index) in aboutList" :key="index" class="mb-2 list-none">{{ item.content }}</li>
              <li class="list-none">
                网站访问数量：
                <el-button v-for="(item, index) in seeNumberCopy" :key="index" type="primary" disabled size="mini">{{
                  item
                }}</el-button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      problemList: [
        { index: 0, content: '加入我们' },
        { index: 1, content: '帮助中心' }
      ],
      aboutList: [
        { index: 0, content: '公司地址：' },
        { index: 1, content: '公司官网：' },
        { index: 2, content: '公司邮箱：' },
        { index: 3, content: '联系我们：' }
      ],
      seeNumber: 123,
      seeNumberCopy: [],
      bgImg: require('@/assets/layout/l3.png')
    }
  },
  created() {
    this.seeNumberCopy = this.getSee()
  },
  methods: {
    getSee() {
      const b = this.seeNumber.toString()
      const copy = b.split('')
      return copy
    }
  }
}
</script>
<style scoped></style>
