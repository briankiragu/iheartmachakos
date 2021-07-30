<template>
  <div class="business-list mb-5">
    <div
      v-if="hasBusinesses"
      :id="`business-directory-accordion`"
      class="business-list__cards accordion"
    >
      <BusinessListItem
        v-for="business in businesses"
        :key="business.directoryIdx"
        :business="business"
      />
    </div>

    <div v-else class="card">
      <div class="card-body text-center">
        There are no businesses to display.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
import { computed, defineAsyncComponent, defineComponent } from 'vue';
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

  setup(props) {
    const hasBusinesses = computed(() => props.businesses.length > 0);
    return { hasBusinesses };
  },
});
</script>

<style lang="scss" scoped>
.business-list {
  color: hsl(217, 19%, 27%);
}
</style>
