<template>
  <div class="app-container">
    <basic-nav-tabs
      :tabs-list="tabsList"
      :active-name="activeName"
      @getActiveSubName="getActiveSubName"
    />

    <div v-if="activeName == 'basicInformation'">
      <basic-nav-tabs
        :tabs-list="subTabsList"
        :is-second-nav="true"
        :active-name="subActiveName"
        @getActiveSubName="getSubActiveSubName"
      />

      <div>
        <sub-sub-nav-tabs :sub-active-name="subActiveName" />
      </div>
    </div>
    <div v-else-if="activeName == 'registrationInformation'">
      <registration-information />
    </div>
    <div v-else-if="activeName == 'completionAcceptance'">
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
    activeName: { type: String, default: '' }
  },
  data() {
    return {
      subTabsList: [
        { index: 0, label: '详细信息', name: 'information' },
        { index: 1, label: '参与单位及相关负责人', name: 'person' },
        { index: 2, label: '单体信息', name: 'monomerInformation' }
      ],
      subActiveName: 'information',
      completionAcceptanceTabsList: [
        { index: 0, label: '竣工验收备案信息', name: 'filingInformation' },
        { index: 1, label: '竣工验收信息', name: 'acceptanceInformation' }
      ],
      completionAcceptanceActiveName: 'filingInformation'
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
  created() {
    // if (this.activeName === 'completionAcceptance') {
    //   this.subActiveName = 'filingInformation'
    // } else if (this.activeName === 'basicInformation') {
    //   this.subActiveName = 'information'
    // }
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
      this.subActiveName = v
    },
    getCompletionAcceptanceActiveName(v) {
      this.completionAcceptanceActiveName = v
    }
  }
}
</script>
