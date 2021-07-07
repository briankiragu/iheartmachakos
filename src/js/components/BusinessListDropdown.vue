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

<script>
export default {
  name: 'BusinessListDropdown',
  props: {
    filterTerm: { type: String, default: '' },
  },
  emits: ['update:filterTerm'],

  setup(props, { emit }) {
    const categories = Vue.inject('categories');

    const toTitle = (value) =>
      value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const onFilter = (e) => {
      emit('update:filterTerm', e.target.value);
    };

    return { categories, toTitle, onFilter };
  },
};
</script>
