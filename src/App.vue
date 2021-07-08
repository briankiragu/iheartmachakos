<template>
  <BusinessList />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const BusinessList = defineAsyncComponent(
  () => import('./js/components/BusinessList.vue')
);

export default defineComponent({
  components: { BusinessList },

  setup() {
    return {
      people: [
        { id: 32123424, name: 'James Veitch', age: 28 },
        { id: 62164364, name: 'Libro Manhaam', age: 32 },
      ],
    };
  },
});
</script>

<style></style>
