<template>
  <div class="business-list px-3 py-4">
    <div id="teleport">
      <!-- Page Views. -->
      <div id="business-views"></div>

      <!-- Modals. -->
      <div id="business-modals"></div>
    </div>

    <!-- Add a new business. -->
    <div class="business-list__add mb-5">
      <BusinessListAdd />
    </div>

    <div class="row g-2">
      <!-- Dropdown Filter. -->
      <div class="col-md-3">
        <BusinessListDropdown v-model:filter-term.lazy="filterTerm" />
      </div>

      <!-- Searchbar. -->
      <div class="col">
        <BusinessListSearchbar v-model:search-term.lazy="searchTerm" />
      </div>
    </div>

    <!-- List of businesses. -->
    <div v-if="hasBusinesses" class="business-list__card">
      <BusinessListCard
        v-for="business in businesses"
        :key="business.directoryIdx"
        :business="business"
      />

      <div
        class="business-list__loader d-flex justify-content-center"
        :class="{ 'd-none': !isLoading }"
      >
        <span>Loading...</span>
        <!-- <img
          src="../../assets/loaders/loading.gif"
          alt="Loader icon"
          class="img-fluid"
          loading="lazy"
        /> -->
      </div>
    </div>

    <div v-else class="business-list__no-cards text-center">
      <p class="mb-4 mt-5">There are no businesses to display.</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
const BusinessListAdd = window.loadSFC('components/BusinessListAdd.vue');
const BusinessListCard = window.loadSFC('components/BusinessListCard.vue');
const BusinessListDropdown = window.loadSFC(
  'components/BusinessListDropdown.vue'
);
const BusinessListSearchbar = window.loadSFC(
  'components/BusinessListSearchbar.vue'
);

export default {
  name: 'BusinessList',
  components: {
    BusinessListAdd,
    BusinessListCard,
    BusinessListSearchbar,
    BusinessListDropdown,
  },

  setup() {
    // API Base URI.
    const baseUrl = 'https://heartofkenya.com';

    // Declare data properties.
    const isLoading = Vue.ref(true);
    const pageNo = Vue.ref(1);

    const searchTerm = Vue.ref('');
    const filterTerm = Vue.ref('');
    const categories = Vue.ref([
      {
        param: 'beauty',
        title: 'Beauty and Health',
        status: 'Active',
      },
      {
        param: 'bookstores',
        title: 'Book Stores',
        status: 'Active',
      },
    ]);
    const businesses = Vue.ref([
      {
        directoryIdx: 4,
        worldid: 'kenyaheart',
        library: 'Machakos',
        category: 'Beauty',
        title: 'Ruth Beauty Parlour',
        owner: 'Bernard',
        website: '',
        city: 'Machakos',
        localowned: null,
        status: 'Active',
        modified: '4/16/2021 11:55:35 PM',
      },
      {
        directoryIdx: 1,
        worldid: 'kenyaheart',
        library: 'machakos',
        category: 'bookstores',
        title: 'Chap Chap Enterprise',
        owner: 'Richard Wasike',
        website: null,
        city: 'Machakos',
        localowned: 'true',
        status: 'Active',
        modified: '',
      },
    ]);

    const hasBusinesses = Vue.computed(() => businesses.value.length > 0);

    /**
     * Function to query endpoint.
     *
     * @param page {number} The page number.
     * @param term {null | string} The search term
     * @returns Promise<IBusiness[]>
     *
     * @author Brian K. Kiragu <bkariuki@hotmail.com>
     */
    const getBusinesses = async (page = 1, term = null) => {
      // Set the request endpoint.
      let endpoint = `${baseUrl}/TableSearchJson?config=directoryMachakosJson&page=${page}`;

      // Check if a search term was provided.
      endpoint = term ? `${endpoint}&search=${term}` : endpoint;

      // Launch the request.
      const response = await fetch(endpoint);

      // Check for errors.
      if (!response.ok) {
        throw new Error(`There was an error ${response.statusText}`);
      }

      // Get the data from the request.
      return response.json();
    };

    /**
     * Function to query categories.
     *
     * @param page {number} The page number.
     * @param term {null | string} The search term
     * @returns Promise</ICategory[]>
     *
     * @author Brian K. Kiragu <bkariuki@hotmail.com>
     */
    const getCategories = async (page = 1, term = null) => {
      // Set the request endpoint.
      let endpoint = `${baseUrl}/TableSearchJson?config=businessCategories&page=${page}`;

      // Check if a search term was provided.
      endpoint = term ? `${endpoint}&search=${term}` : endpoint;

      // Launch the request.
      const response = await fetch(endpoint);

      // Check for errors.
      if (!response.ok) {
        throw new Error(`There was an error ${response.statusText}`);
      }

      // Get the data from the request.
      return response.json();
    };

    // Fetch the data when the component is mounted.
    Vue.onMounted(() => {
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
      window.onscroll = async () => {
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

    // Provide the categories and updateBusiness to the children.
    Vue.provide('categories', categories);

    return {
      isLoading,
      searchTerm,
      filterTerm,
      categories,
      businesses,
      hasBusinesses,
    };
  },
};
</script>

<style scoped>
.business-list__loader img {
  width: 80px;
}
</style>
