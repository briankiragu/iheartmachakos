<template>
  <div class="business-searchbar form-row mb-3">
    <div class="col mb-2">
      <input
        type="search"
        class="form-control"
        placeholder="Search for a business"
        autocomplete="organization"
        :value="modelValue"
        @input.prevent="onSearch($event)"
      />
    </div>
    <div class="col-md-2">
      <button
        type="submit"
        class="btn btn-block btn-primary"
        @click.prevent="() => onSubmit()"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { debounce } from 'lodash';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BusinessSearchbar',
  props: {
    modelValue: { type: String, default: '' },
    onSubmit: { type: Function, default: () => {} },
  },
  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const onSearch = debounce((e: any) => {
      emit('update:modelValue', e.target.value);
    }, 2000);

    return { onSearch };
  },
});
</script>

<style lang="scss" scoped>
.business-searchbar {
  input,
  button {
    font-size: 0.95rem;
    font-weight: 400;
    height: 53px;
    transition: all 0.3s ease-in-out;
  }

  .form-control {
    padding: 23px;
  }

  .form-control:focus,
  button:hover,
  button:focus {
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}
</style>
