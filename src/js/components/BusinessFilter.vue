<template>
  <div id="categoryAccordion" class="business-filter accordion">
    <div class="card">
      <div id="categoryHeading" class="card-header">
        <button
          class="
            btn btn-link btn-block
            text-left
            d-flex
            justify-content-between
            align-items-center
          "
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          :aria-expanded="isExpanded"
          aria-controls="collapseOne"
        >
          <div class="business-filter__title">
            <h2 class="business-filter__heading mb-1">Filter by category</h2>
            <h4 class="business-filter__subheading mb-0">
              {{ filterCount }} categories available
            </h4>
          </div>

          <div class="business-filter__icon">
            <i class="fas fa-caret-down"></i>
          </div>
        </button>
      </div>

      <div
        id="collapseOne"
        class="collapse"
        :class="{ show: isExpanded }"
        aria-labelledby="categoryHeading"
        data-parent="#categoryAccordion"
      >
        <div class="card-body d-flex flex-wrap">
          <BusinessFilterItem
            v-for="item of items"
            :key="item.param"
            :item="item"
            class="mb-2 mr-2"
            :active="filters.includes(item.param)"
            @selected="updateFilters"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  onMounted,
  ref,
  Ref,
} from 'vue';
import { ICategory } from '../../interfaces';

const BusinessFilterItem = defineAsyncComponent(
  () => import('./BusinessFilterItem.vue')
);

export default defineComponent({
  name: 'BusinessFilter',
  components: { BusinessFilterItem },
  props: {
    modelValue: { type: String, default: '' },
    items: { type: Array as () => ICategory[], default: () => [] },
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    // Count the number of filters.
    const filterCount = computed(() => props.items.length);
    const isExpanded = computed(() => props.items.length <= 10);

    // Applied filters.
    const filters: Ref<string[]> = ref([]);

    // When a filter item is selected.
    const updateFilters = (value: string) => {
      // Check if the item is in the filters already.
      const index = filters.value.findIndex((filter) => filter === value);

      if (index >= 0) {
        // If it exists, remove it from the filters.
        filters.value.splice(index, 1);
      } else {
        // If it does not exist, add it to the list.
        filters.value = [...filters.value, value];
      }

      // Emit the updated filters as a string.
      emit('update:modelValue', filters.value.join(','));
    };

    // Pre-fill the filters.
    onMounted(() => {
      filters.value = props.modelValue.split(',').filter((val) => val);
    });

    return { filters, filterCount, isExpanded, updateFilters };
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
    font-size: 0.94rem;
    font-weight: 400;
  }
}
</style>
