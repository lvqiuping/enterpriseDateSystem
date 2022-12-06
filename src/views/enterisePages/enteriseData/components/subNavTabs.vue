<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeName"
      @getActiveSubName="getActiveSubName"
    />

    <div v-if="activeNames == 'qualifications'">
      <qualifications />
    </div>
    <div v-else-if="activeNames == 'join'">
      <join />
      <!-- <basic-nav-tabs
        :tabs-list="subTabsListJoin"
        :is-second-nav="true"
        :active-name="subActiveNameJoin"
        @getActiveSubName="getSubActiveSubNameJoin"
      />

      <div>
        <sub-sub-nav-tabs :sub-active-name="subActiveName" />
      </div> -->
    </div>
    <div v-else-if="activeNames == 'project'">
      <project />
    </div>
    <div v-else-if="activeNames == 'concat'">
      <concat />
    </div>
    <div v-else-if="activeNames == 'perTitle'">
      <basic-nav-tabs
        :tabs-list="subTabsList"
        :is-second-nav="true"
        :active-name="subActiveName"
        @getActiveSubName="getSubActiveSubName"
      />
      <engineer :per-type="perType" />
    </div>
    <div v-else-if="activeNames == 'other'">
      <basic-nav-tabs
        :tabs-list="subTabsListOther"
        :is-second-nav="true"
        :active-name="subActiveNameOther"
        @getActiveSubName="getSubActiveSubNameOther"
      />
      <other-personnel :per-type="perType" />
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

export default {
  name: 'SubNavTabs',
  components: { BasicNavTabs, Qualifications, Project, Concat, Join, OtherPersonnel, Engineer },
  props: {
    tabsList: { type: Array, default: null },
    activeName: { type: String, default: '' }
  },
  data() {
    return {
      activeNames: '', // 一级高亮,接收再改值
      //
      subTabsList: [
        { index: 0, label: '高级工程师', name: 'seniorEngineer' },
        { index: 1, label: '中级工程师', name: 'intermediateEngineer' },
        { index: 2, label: '初级工程师', name: 'juniorEngineer' }
      ],
      subActiveName: 'seniorEngineer', // 二级
      //
      subTabsListOther: [
        { index: 3, label: '安全三类人员', name: 'safetyPersonnel' },
        { index: 4, label: '专业岗位人员', name: 'professionals' },
        { index: 5, label: '技术工人', name: 'skilledWorkers' },
        { index: 6, label: '特种作业人员', name: 'specialPersonnel' }
      ],
      subActiveNameOther: 'safetyPersonnel',
      perType: 3
      //

    }
  },
  watch: {
    'activeName': {
      immediate: true,
      handler(newVal, oldValue) {
        console.log('newVal', newVal)
        this.activeNames = newVal
      }
    }
  },
  created() {
  },
  methods: {
    getActiveSubName(v) {
      this.$emit('getActiveSubNameEmit', v)
    },
    getSubActiveSubName(v) {
      this.subActiveName = v
    },
    getSubActiveSubNameOther(v) {
      console.log(v)
      if (v === 'safetyPersonnel') {
        this.perType = 3
      } else if (v === 'professionals') {
        this.perType = 4
      } else if (v === 'skilledWorkers') {
        this.perType = 5
      } else if (v === 'specialPersonnel') {
        this.perType = 6
      }
      this.subActiveNameOther = v
    }
  }
}
</script>
