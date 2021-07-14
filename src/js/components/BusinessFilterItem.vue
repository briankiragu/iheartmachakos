<template>
  <div class="business-filter-item">
    <span class="business-filter-item__icon">
      <i class="fas fa-check"></i>
    </span>
    <span class="business-filter-item__title">
      {{ item.title }}
    </span>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/extensions */
import { defineComponent } from 'vue';
import { ICategory } from '../../interfaces';

export default defineComponent({
  name: 'BusinessFilterItem',
  props: {
    item: { type: Object as () => ICategory, default: () => {} },
  },

  setup() {},
});
</script>

<style lang="scss" scoped>
$primary-color: #494545;
$accent-color: #255ca5;

.business-filter-item {
  border: 0.13rem solid rgba($primary-color, 0.25);
  border-radius: 14px;
  cursor: pointer;
  padding: 5px 14px;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &__icon {
    margin-right: 12px;
  }

  &__title {
    color: $primary-color;
    font-family: 'Inter', sans-serif;
    font-size: 0.97rem;
    font-weight: 500;
    white-space: nowrap;
  }
}
.business-filter-item:hover {
  border-color: rgba($accent-color, 0.4);

  .business-filter-item__icon {
    color: $accent-color;
  }
  .business-filter-item__title {
    color: $accent-color;
  }
}
</style>
