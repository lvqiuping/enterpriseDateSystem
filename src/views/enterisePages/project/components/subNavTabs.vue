<template>
  <div class="app-container">
    <basic-nav-tabs :tabs-list="tabsList" :active-name="activeName" @getActiveSubName="getActiveSubName" />
    <div v-if="activeName == 'basicInformation'">
      <basic-nav-tabs :tabs-list="subTabsList" :active-name="subActiveName" :is-second-nav="true" @getActiveSubName="getSubActiveSubName" />
      <div>
        <sub-sub-nav-tabs :sub-active-name="subActiveName" />
      </div>
    </div>
    <div v-else-if="activeName == 'registrationInformation'">2</div>
    <div v-else="activeName == 'completionAcceptance'">3</div>
  </div>
</template>
<script>
import BasicNavTabs from '@/components/BasicNavTabs/index.vue'
import subSubNavTabs from './subSubNavTabs.vue'
export default {
  name: 'SubNavTabs',
  components: { BasicNavTabs, subSubNavTabs },
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
      subActiveName: 'information'
    }
  },
  methods: {
    getActiveSubName(v) {
      this.$emit('getActiveSubNameEmit', v)
    },
    getSubActiveSubName(v) {
      this.subActiveName = v
    }
  }
}
</script>
