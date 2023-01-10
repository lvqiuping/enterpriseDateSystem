<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeName"
      @getActiveSubName="getActiveSubName"
    />

    <div v-if="activeName == '工程基本信息'">
      <basic-nav-tabs
        :tabs-list="subTabsList"
        :is-second-nav="true"
        :active-name="subActiveName"
        @getActiveSubName="getSubActiveSubName"
      />

      <div>
        <sub-sub-nav-tabs :sub-active-name="subActiveName" :project-code="projectCode" />
      </div>
    </div>
    <div v-else-if="activeName == '合同登记信息'">
      <registration-information />
    </div>
    <div v-else-if="activeName == '竣工验收'">
      <basic-nav-tabs
        :tabs-list="completionAcceptanceTabsList"
        :is-second-nav="true"
        :active-name="completionAcceptanceActiveName"
        @getActiveSubName="getCompletionAcceptanceActiveName"
      />
      <div>
        <sub-sub-nav-tabs :sub-active-name="completionAcceptanceActiveName" />
      </div>
    </div>
  </div>
</template>
<script>
import RegistrationInformation from '@/views/enterisePages/project/sub/pages/registrationInformation.vue'
import BasicNavTabs from '@/components/BasicNavTabs/index.vue'
import subSubNavTabs from './subSubNavTabs.vue'

export default {
  name: 'SubNavTabs',
  components: { BasicNavTabs, subSubNavTabs, RegistrationInformation },
  props: {
    tabsList: { type: Array, default: null },
    activeName: { type: String, default: '' },
    projectCode: { type: String, default: '' }
  },
  data() {
    return {
      subTabsList: [
        { name: '详细信息' },
        { name: '参与单位及相关负责人' },
        { name: '单体信息' }
      ],
      subActiveName: '详细信息',
      completionAcceptanceTabsList: [
        { name: '竣工验收备案信息' },
        { name: '竣工验收信息' }
      ],
      completionAcceptanceActiveName: '竣工验收备案信息'
    }
  },
  watch: {
    'subActiveName': {
      immediate: true,
      handler(newVal, oldValue) {
        console.log('newVal', newVal)
        this.subActiveName = newVal
      }
    },
    'completionAcceptanceActiveName': {
      immediate: true,
      handler(newVal, oldValue) {
        console.log('newVal', newVal)
        this.completionAcceptanceActiveName = newVal
      }
    }
  },
  methods: {
    getActiveSubName(v) {
      if (v === 'completionAcceptance') {
        this.completionAcceptanceActiveName = 'filingInformation'
      } else if (v === 'basicInformation') {
        this.subActiveName = 'information'
      }
      this.$emit('getActiveSubNameEmit', v)
    },
    getSubActiveSubName(v) {
      this.subActiveName = v.name
    },
    getCompletionAcceptanceActiveName(v) {
      this.completionAcceptanceActiveName = v.name
    }
  }
}
</script>
