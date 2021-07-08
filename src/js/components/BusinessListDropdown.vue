<template>
  <div v-if="categories" class="business-list-dropdown form-floating">
    <select
      id="business-list-filter"
      class="form-select"
      aria-label="Floating label select example"
      @change="onFilter($event)"
    >
      <option value="">All categories</option>
      <option
        v-for="category in categories"
        :key="category.param"
        :value="category.param"
      >
        {{ toTitle(category.title) }}
      </option>
    </select>
    <label for="business-list-filter">Choose a category</label>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { defineComponent, inject } from 'vue';
import { ICategory } from '../../interfaces';
import useFormatting from '../composables/useFormatting';

export default defineComponent({
  name: 'BusinessListDropdown',
  props: {
    filterTerm: { type: String, default: '' },
  },
  emits: ['update:filterTerm'],

  setup(props, { emit }) {
    const categories: undefined | ICategory[] = inject('categories');

    // Get formatting tools.
    const { toTitle } = useFormatting();

    const onFilter = (e: any) => {
      emit('update:filterTerm', e.target.value);
    };

    return { categories, toTitle, onFilter };
  },
});
</script>
