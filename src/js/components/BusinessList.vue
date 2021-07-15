<template>
  <div class="business-list mb-5">
    <div class="business-list__card">
      <BusinessListItem
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
const BusinessListItem = defineAsyncComponent(
  () => import('./BusinessListItem.vue')
);

export default defineComponent({
  name: 'BusinessList',
  components: { BusinessListItem },
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
