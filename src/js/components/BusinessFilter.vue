<template>
  <div id="categoryAccordion" class="business-filter accordion">
    <div class="card">
      <div id="categoryHeading" class="card-header">
        <button
          class="btn btn-link btn-block text-left"
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h2 class="business-filter__heading mb-1">Filter by category</h2>
          <h4 class="business-filter__subheading mb-0">
            {{ filterCount }} categories available
          </h4>
        </button>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="categoryHeading"
        data-parent="#categoryAccordion"
      >
        <div class="card-body d-flex flex-wrap">
          <BusinessFilterItem
            v-for="item of items"
            :key="item.param"
            :item="item"
            class="mb-2 mr-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { ICategory } from '../../interfaces';

const BusinessFilterItem = defineAsyncComponent(
  () => import('./BusinessFilterItem.vue')
);

export default defineComponent({
  name: 'BusinessFilter',
  components: { BusinessFilterItem },
  props: {
    items: { type: Array as () => ICategory[], default: () => [] },
  },

  setup(props) {
    // Count the number of filters.
    const filterCount = computed(() => props.items.length);

    return { filterCount };
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #878787;
$accent-color: #4a7dbf;

.business-filter {
  button {
    text-decoration: none;

    &:focus {
      box-shadow: none;
    }
  }

  &__heading {
    color: hsl(0, 5%, 22%);
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
  }

  &__subheading {
    color: rgba($primary-color, 1);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
