<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeName"
      @getActiveSubName="getActiveSubName"
    />

    <div v-if="activeNames == '企业资质资格'">
      <qualifications />
    </div>
    <div v-else-if="activeNames == '注册人员'">
      <!-- <div class="row">
        <div class="col-6">
          <e-bar
            :id="'enteriseId'"
            :bar-chart-data="barChartData2"
            :item-style="itemStyle2"
            :emphasis="emphasis2"
            :height="'484px'"
          />
        </div>
      </div> -->
      <div v-loading="loading">
        <basic-nav-tabs
          :tabs-list="subTabsListJoin"
          :is-second-nav="true"
          :active-name="subActiveNamejoin"
          @getActiveSubName="getSubActiveSubNameJoin"
        />
        <join v-if="subTabsListJoin.length" :active-id="activeId" />
        <div v-else class="text-center my-10 text-gray-400 mb-20">暂无数据</div>
      </div>

    </div>
    <div v-else-if="activeNames == '工程项目'">
      <project />
    </div>
    <div v-else-if="activeNames == '联系方式'">
      <concat />
    </div>
    <div v-else-if="activeNames == '职称人员'">
      <basic-nav-tabs
        :tabs-list="subTabsList"
        :is-second-nav="true"
        :active-name="subActiveName"
        @getActiveSubName="getActiveSubNamePerTitle"
      />
      <engineer :title-level="titleLevel" />
    </div>
    <div v-else-if="activeNames == '其他人员'">
      <basic-nav-tabs
        :tabs-list="subTabsListOther"
        :is-second-nav="true"
        :active-name="subActiveNameOther"
        @getActiveSubName="getActiveSubNameOther"
      />
      <other-personnel :cer-type="cerType" />
    </div>
  </div>
</template>
<script>
import BasicNavTabs from '@/components/BasicNavTabs/index.vue'
import Qualifications from '@/views/enterisePages/enteriseData/sub/pages/qualifications.vue'
import Join from '@/views/enterisePages/enteriseData/sub/pages/join.vue'
import Project from '@/views/enterisePages/enteriseData/sub/pages/project.vue'
import Concat from '@/views/enterisePages/enteriseData/sub/pages/concat.vue'
import OtherPersonnel from '@/views/enterisePages/enteriseData/sub/pages/otherPersonnel.vue'
import Engineer from '@/views/enterisePages/enteriseData/sub/pages/engineer.vue'
import { GetRegGroupMajors } from '@/api/enterise.js'
export default {
  name: 'SubNavTabs',
  components: { BasicNavTabs, Qualifications, Project, Concat, Join, OtherPersonnel, Engineer },
  props: {
    tabsList: { type: Array, default: null },
    activeName: { type: String, default: '' },
    companyName: { type: String, default: '' }
  },
  data() {
    return {
      loading: false,
      activeNames: '', // 一级高亮,接收再改值
      // 默认注册人员
      subActiveNamejoin: '',
      subTabsListJoin: [], // 请求数据
      activeId: 0,
      // 默认高级
      titleLevel: 3,
      subActiveName: '高级工程师',
      subTabsList: [
        { id: 7, name: '高级工程师' },
        { id: 1, name: '中级工程师' },
        { id: 2, name: '初级工程师' }
      ],
      // 默认安全人员
      cerType: 2,
      subActiveNameOther: '安全三类人员',
      subTabsListOther: [
        { id: 3, name: '安全三类人员' },
        { id: 4, name: '专业岗位人员' },
        { id: 5, name: '技术工人' },
        { id: 6, name: '特种作业人员' }
      ]

    }
  },
  watch: {
    'activeName': {
      immediate: true,
      handler(newVal, oldValue) {
        this.activeNames = newVal
        if (this.activeNames === '注册人员') {
          this.getGetRegGroupMajors()
        }
      }
    }
  },
  created() {
    // this.getGetRegGroupMajors()
  },
  methods: {
    getGetRegGroupMajors() {
      this.loading = true
      console.log('加载')
      GetRegGroupMajors({ companyName: this.companyName }).then(response => {
        console.log(response)
        if (response.statusCode === 200) {
          this.loading = false
          this.subTabsListJoin = response.data
          console.log('subTabsListJoin', this.subTabsListJoin)
          this.subActiveNamejoin = response.data[0].name
          this.activeId = response.data[0].id
        }
      }).catch(err => {
        console.log(err)
        this.loading = false
      })
    },
    getSubActiveSubNameJoin(v) {
      this.activeId = v.$attrs['data-id']
      console.log('this.activeId', this.activeId)
    },

    getActiveSubName(v) {
      this.$emit('getActiveSubNameEmit', v)
    },
    // 职称人员 初级：1，中级：2，高级：3
    getActiveSubNamePerTitle(v) {
      this.subActiveName = v.label
      if (this.subActiveName === '高级工程师') {
        this.titleLevel = 3
      } else if (this.subActiveName === '中级工程师') {
        this.titleLevel = 2
      } else if (this.subActiveName === '初级工程师') {
        this.titleLevel = 1
      }
    },
    // 注册证：1，职称证：1，安全：2，专业：3，技术：4，特种：5，其他：6
    getActiveSubNameOther(v) {
      this.subActiveNameOther = v.label
      if (this.subActiveNameOther === '安全三类人员') {
        this.cerType = 2
      } else if (this.subActiveNameOther === '专业岗位人员') {
        this.cerType = 3
      } else if (this.subActiveNameOther === '技术工人') {
        this.cerType = 4
      } else if (this.subActiveNameOther === '特种作业人员') {
        this.cerType = 5
      }
    }
  }
}
</script>
