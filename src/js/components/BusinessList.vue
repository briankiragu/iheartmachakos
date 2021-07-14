<template>
  <div class="business-list">
    <div class="business-list__card">
      <BusinessListCard
        v-for="business in businesses"
        :key="business.directoryIdx"
        :business="business"
      />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
import { defineAsyncComponent, defineComponent } from 'vue';
import { IBusiness } from '../../interfaces';

// Import components.
const BusinessListCard = defineAsyncComponent(
  () => import('./BusinessListCard.vue')
);

export default defineComponent({
  name: 'BusinessList',
  components: { BusinessListCard },
  props: {
    businesses: { type: Array as () => IBusiness[], default: () => [] },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.business-list {
  color: hsl(217, 19%, 27%);
}
</style>
