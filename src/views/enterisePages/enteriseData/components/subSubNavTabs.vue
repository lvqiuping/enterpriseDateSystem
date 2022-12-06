<!-- <template>
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
  </div>
</template>
<script>
import SeniorEngineer from '@/views/enterisePages/enteriseData/sub/pages/seniorEngineer.vue'
import IntermediateEngineer from '@/views/enterisePages/enteriseData/sub/pages/intermediateEngineer.vue'
import JuniorEngineer from '@/views/enterisePages/enteriseData/sub/pages/juniorEngineer.vue'
export default {
  name: 'SubSubNavTabs',
  components: { SeniorEngineer, IntermediateEngineer, JuniorEngineer },
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
</script> -->
