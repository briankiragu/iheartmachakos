<template>
  <div
    class="business-filter-item"
    :class="{ active }"
    @click.prevent="onSelect(item.param)"
  >
    <span v-show="active" class="business-filter-item__icon">
      <!-- <i class="fas fa-check"></i> -->
      <i class="fas fa-fingerprint"></i>
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
    active: { type: Boolean, default: () => false },
  },
  emits: ['selected'],

  setup(props, { emit }) {
    // When the item is selected.
    const onSelect = (value: string) => {
      emit('selected', value);
    };

    return { onSelect };
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #494545;
$accent-color: #184f97;

.business-filter-item {
  border: 0.125rem solid rgba($primary-color, 0.25);
  border-radius: 14px;
  cursor: pointer;
  padding: 5px 16px;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &__icon {
    font-size: 1rem;
    margin-right: 10px;
  }

  &__title {
    color: $primary-color;
    font-family: 'Inter', sans-serif;
    font-size: 0.97rem;
    font-weight: 440;
    white-space: nowrap;
  }
}
.business-filter-item:hover,
.business-filter-item.active {
  border-color: rgba($accent-color, 0.4);

  .business-filter-item__icon {
    color: $accent-color;
  }
  .business-filter-item__title {
    color: $accent-color;
  }
}
</style>
