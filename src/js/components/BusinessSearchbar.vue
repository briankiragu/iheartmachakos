<template>
  <div class="business-searchbar form-row mb-3">
    <div class="col mb-2">
      <input
        type="search"
        class="form-control"
        placeholder="Search for a business"
      />
    </div>
    <div class="col-md-2">
      <button type="submit" class="btn btn-block btn-primary">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BusinessSearchbar',
  props: {
    searchTerm: { type: String, default: '' },
  },
  emits: ['update:searchTerm'],

  setup(props, { emit }) {
    const onSearch = (e: any) => {
      emit('update:searchTerm', e.target.value);
    };

    return { onSearch };
  },
});
</script>

<style lang="scss" scoped>
.business-searchbar {
  input,
  button {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    height: 53px;
    transition: all 0.3s ease-in-out;
  }

  .form-control {
    padding: 23px;
  }

  .form-control:focus,
  button:hover {
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}
</style>
