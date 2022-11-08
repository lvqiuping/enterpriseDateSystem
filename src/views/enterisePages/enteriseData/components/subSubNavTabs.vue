<template>
  <div class="app-container">
    <div v-if="subActiveName === 'seniorEngineer'">
      <senior-engineer />
    </div>
    <div v-else-if="subActiveName === 'intermediateEngineer'">
      <intermediate-engineer />
    </div>
    <div v-else-if="subActiveName === 'juniorEngineer'">
      <junior-engineer />
    </div>
    <div v-else-if="subActiveName === 'safetyPersonnel'">
      <safety-personnel />
    </div>
    <div v-else-if="subActiveName === 'professionals'">
      <professionals />
    </div>
    <div v-else-if="subActiveName === 'skilledWorkers'">
      <skilled-workers />
    </div>
    <div v-else-if="subActiveName === 'specialPersonnel'">
      <special-personnel />
    </div>
  </div>
</template>
<script>
import SeniorEngineer from '@/views/enterisePages/enteriseData/sub/pages/seniorEngineer.vue'
import IntermediateEngineer from '@/views/enterisePages/enteriseData/sub/pages/intermediateEngineer.vue'
import JuniorEngineer from '@/views/enterisePages/enteriseData/sub/pages/juniorEngineer.vue'
import SafetyPersonnel from '@/views/enterisePages/enteriseData/sub/pages/safetyPersonnel.vue'
import Professionals from '@/views/enterisePages/enteriseData/sub/pages/professionals.vue'
import SkilledWorkers from '@/views/enterisePages/enteriseData/sub/pages/skilledWorkers.vue'
import SpecialPersonnel from '@/views/enterisePages/enteriseData/sub/pages/specialPersonnel.vue'
export default {
  name: 'SubSubNavTabs',
  components: { SeniorEngineer, IntermediateEngineer, JuniorEngineer, SafetyPersonnel, Professionals, SkilledWorkers, SpecialPersonnel },
  props: {
    subActiveName: { type: String, default: '' }
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
