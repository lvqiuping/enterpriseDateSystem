<template>
  <div class="app-container">
    <div v-if="subActiveName === '详细信息'">
      <information :projectCode="projectCode" />
    </div>
    <div v-else-if="subActiveName === '参与单位及相关负责人'">
      <person :projectCode="projectCode" />
    </div>
    <div v-else-if="subActiveName === '单体信息'">
      <monomeri-information :projectCode="projectCode" />
    </div>
    <div v-else-if="subActiveName === '竣工验收备案信息'">
      <filing-information />
    </div>
    <div v-else-if="subActiveName === '竣工验收信息'">
      <acceptance-information />
    </div>
  </div>
</template>
<script>
import Information from '@/views/enterisePages/project/sub/pages/information.vue'
import MonomeriInformation from '@/views/enterisePages/project/sub/pages/monomerInformation.vue'
import Person from '@/views/enterisePages/project/sub/pages/person.vue'
import FilingInformation from '@/views/enterisePages/project/sub/pages/filingInformation.vue'
import AcceptanceInformation from '@/views/enterisePages/project/sub/pages/acceptanceInformation.vue'

export default {
  name: 'SubSubNavTabs',
  components: { Information, MonomeriInformation, Person, FilingInformation, AcceptanceInformation },
  props: {
    subActiveName: { type: String, default: '' },
    projectCode: { type: String, default: '' }
  },
  watch: {
    'subActiveName': {
      immediate: true,
      handler(newVal, oldValue) {
        console.log('newValzhe', newVal)
        this.subActiveName = newVal
      }
    }
  }

}
</script>
