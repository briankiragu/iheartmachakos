<template>
  <div class="container-fluid" style="font-size: 14px">
    <div id="teleport">
      <!-- Page Views. -->
      <div id="business-views"></div>

      <!-- Modals. -->
      <div id="business-modals"></div>
    </div>

    <div class="row">
      <div class="col-md-4 pb-4 px-4 pt-4 p-md-4">
        <!-- Categories. -->
        <BusinessFilter v-model="filterTerm" :items="categories" />
      </div>

      <!-- Result. -->
      <div class="businesses col px-4 py-0 py-md-4 d-flex flex-column">
        <!-- Searchbar. -->
        <BusinessSearchbar
          v-model="searchTerm"
          :on-submit="onSubmit"
          class="mb-5"
        />

        <!-- <div class="align-self-end mb-4">
          <BusinessAdd />
        </div> -->

        <div v-if="hasBusinesses">
          <BusinessList :businesses="businesses" />
        </div>

        <div v-else class="text-center">
          <p class="text-muted">No businesses to display</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  provide,
  ref,
  Ref,
} from 'vue';
import useBackend from './js/composables/useBackend';

const BusinessFilter = defineAsyncComponent(
  () => import('./js/components/BusinessFilter.vue')
);
const BusinessSearchbar = defineAsyncComponent(
  () => import('./js/components/BusinessSearchbar.vue')
);
// const BusinessAdd = defineAsyncComponent(
//   () => import('./js/components/BusinessAdd.vue')
// );
const BusinessList = defineAsyncComponent(
  () => import('./js/components/BusinessList.vue')
);

export default defineComponent({
  components: {
    BusinessFilter,
    BusinessSearchbar,
    // BusinessAdd,
    BusinessList,
  },

  setup() {
    // Get backend properties.
    const {
      searchTerm,
      filterTerm,
      businesses,
      categories,
      hasBusinesses,
      getBusinesses,
      getCategories,
    } = useBackend();

    // Declare data properties.
    const isLoading: Ref<boolean> = ref(true);
    const pageNo: Ref<number> = ref(1);

    // Fetch the data when the component is mounted.
    onMounted(() => {
      // Set to loading.
      isLoading.value = true;

      // Get the first businesses on page load.
      getBusinesses(pageNo.value)
        .then((response) => {
          businesses.value = [...response.data];
        })
        .catch((err) => console.error(err.message));

      // Get the active categories on page load.
      getCategories()
        .then((response) => {
          categories.value = [
            ...response.data.filter(
              (category) => category.status.toLowerCase() === 'active'
            ),
          ];
        })
        .catch((err) => console.error(err.message));

      // Add a listener to fetch more records on scroll-to-bottom.
      window.onscroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          // Set the state to loading.
          isLoading.value = true;

          // Add the page count.
          pageNo.value += 1;

          // Get the requests.
          getBusinesses(pageNo.value)
            .then((response) => {
              // Check if any new data was returned.
              if (response.data.length > 0) {
                // Update the businesses with the incoming data.
                businesses.value.push(...response.data);
              } else {
                // Decrement the page counter.
                pageNo.value -= 1;
              }
            })
            .catch(() => {
              // Decrement the page counter.
              pageNo.value -= 1;
            });

          // Set the state from loading.
          isLoading.value = false;
        }
      };

      // Set from loading.
      isLoading.value = false;
    });

    // Update the filter query.
    const updateFilterQuery = (filters: Ref<string[]>) => {
      console.dir(filters.value);
    };

    // When a user submits a form.
    const onSubmit = () => {
      console.log(`Submitting the form`);
    };

    // Provide the categories and updateBusiness to the children.
    provide('categories', categories);

    return {
      isLoading,
      searchTerm,
      filterTerm,
      categories,
      businesses,
      hasBusinesses,
      updateFilterQuery,
      onSubmit,
    };
  },
});
</script>
