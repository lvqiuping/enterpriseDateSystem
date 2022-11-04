<template>
  <div class="app-container">
    <div v-if="subActiveName === 'information'">
      <information />
    </div>
    <div v-else-if="subActiveName === 'person'">
      <person />
    </div>
    <div v-else-if="subActiveName === 'monomerInformation'">
      <monomeri-information />
    </div>
    <div v-else-if="subActiveName === 'filingInformation'">
      <filing-information />
    </div>
    <div v-else-if="subActiveName === 'acceptanceInformation'">
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
    subActiveName: { type: String, default: '' }
  }
}
</script>
