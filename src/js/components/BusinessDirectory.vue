<template>
  <div class="container-fluid" style="font-size: 14px">
    <!-- Modals. -->
    <div id="business-modals"></div>

    <div class="row pt-5">
      <div v-if="!hasDirectoryCategory" class="col-md-4 pb-4 px-4 px-md-5 py-0">
        <!-- Categories. -->
        <BusinessFilter v-model="filterTerm" :items="categories" />
      </div>

      <!-- Result. -->
      <div class="businesses col px-4 py-0 d-flex flex-column">
        <!-- Searchbar. -->
        <BusinessSearchbar
          v-model="searchTerm"
          :on-submit="onSubmit"
          class="mb-5 mb-md-4"
        />

        <!-- New business modal. -->
        <BusinessForm
          order="newBusiness"
          action="store"
          class="align-self-end mb-4"
        />

        <!-- Businesses. -->
        <BusinessList :businesses="businesses" />
      </div>
    </div>

    <!-- Page Views. -->
    <div id="business-details"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  provide,
  ref,
  Ref,
  watch,
} from 'vue';
import useBackend from '../composables/useBackend';

// Load components.
const BusinessFilter = defineAsyncComponent(
  () => import('./BusinessFilter.vue')
);
const BusinessSearchbar = defineAsyncComponent(
  () => import('./BusinessSearchbar.vue')
);
const BusinessForm = defineAsyncComponent(() => import('./BusinessForm.vue'));
const BusinessList = defineAsyncComponent(() => import('./BusinessList.vue'));

export default defineComponent({
  components: {
    BusinessFilter,
    BusinessSearchbar,
    BusinessForm,
    BusinessList,
  },

  setup() {
    // Get backend properties.
    const {
      searchTerm,
      filterTerm,
      businesses,
      categories,
      getBusinesses,
      getCategories,
    } = useBackend();

    // Check if the directory category has been set.
    const hasDirectoryCategory: boolean = directoryCategory !== '';

    // Declare data properties.
    const isLoading: Ref<boolean> = ref(true);
    const pageNo: Ref<number> = ref(1);

    // Fetch the data when the component is mounted.
    onMounted(() => {
      // Set to loading.
      isLoading.value = true;

      // Get the current query parameters.
      const urlSearchParams: URLSearchParams = new URLSearchParams(
        window.location.search
      );
      const { search, category } = Object.fromEntries(
        urlSearchParams.entries()
      );

      // Set the search term depending on the search URL params.
      searchTerm.value = search;

      // Set the category filter depending on the Directory Category or search URL params.
      filterTerm.value = hasDirectoryCategory ? directoryCategory : category;

      // Get the first businesses on page load.
      getBusinesses(pageNo.value, filterTerm.value, searchTerm.value)
        .then((response) => {
          businesses.value = [...response.data];
        })
        .catch((err) => console.error(err.message));

      // Get the active categories on page load.
      getCategories()
        .then((response) => {
          categories.value = [
            ...response.data.filter(
              (catgry) => catgry.status.toLowerCase() === 'active'
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

          // Get the requests as per the filter and search term.
          getBusinesses(pageNo.value, filterTerm.value, searchTerm.value)
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

    // Setup a watcher for the filter and search terms.
    watch([filterTerm, searchTerm], (val) => {
      // Set the state to loading.
      isLoading.value = true;

      // Update the businesses.
      getBusinesses(pageNo.value, val[0], val[1])
        .then((response) => {
          businesses.value = [...response.data];
        })
        .catch((err) => console.error(err.message))
        .finally(() => {
          // Remove the loading state.
          isLoading.value = false;
        });
    });

    // When a user submits a form.
    const onSubmit = () => {
      // Reset the page counter.
      pageNo.value = 1;

      // Submit the request with the new filter and search term(s).
      getBusinesses(pageNo.value, filterTerm.value, searchTerm.value)
        .then((response) => {
          businesses.value = [...response.data];
        })
        .catch((err) => console.error(err.message));
    };

    // Provide the categories and updateBusiness to the children.
    provide('categories', categories);

    return {
      hasDirectoryCategory,
      isLoading,
      searchTerm,
      filterTerm,
      categories,
      businesses,
      onSubmit,
    };
  },
});
</script>
