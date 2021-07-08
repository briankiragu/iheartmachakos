/* eslint-disable import/extensions */
import { computed, Ref, ref } from "vue";
import { IBusiness, IBusinessForm, ICategory, IPaginatedBusinessResponse, IPaginatedCategoryResponse } from "../../interfaces";

// API Base URI.
const baseUrl: string = 'https://heartofkenya.com';

export default function useBackend() {
  const searchTerm: Ref<string> = ref('');
  const filterTerm: Ref<string> = ref('');
  const categories: Ref<ICategory[]> = ref([]);
  const businesses: Ref<IBusiness[]> = ref([]);

  const hasCategories: Ref<boolean> = computed(() => categories.value.length > 0)
  const hasBusinesses: Ref<boolean> = computed(() => businesses.value.length > 0)

  /**
   * Function to query endpoint.
   *
   * @param page {number} The page number.
   * @param term {null | string} The search term
   * @returns Promise<IBusiness[]>
   * @author Brian K. Kiragu <bkariuki@hotmail.com>
   */
  const getBusinesses = async (
    page: number = 1,
    term: null | string = null
  ): Promise<IPaginatedBusinessResponse> => {
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
  }

  /**
   * Update a business
   *
   * @param data {IBusinessForm} User input data
   * @author Brian K. Kiragu <bkariuki@hotmail.com>
   */
  const updateBusiness = async (data: IBusinessForm): Promise<void> => {
    // Launch the request.
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check for errors.
    if (!response.ok) {
      throw new Error(`There was an error ${response.statusText}`);
    }

    // Get the data from the request.
    return response.json();
  }

  /**
  * Function to query categories.
  *
  * @param page {number} The page number.
  * @param term {null | string} The search term
  * @returns Promise</ICategory[]>
  * @author Brian K. Kiragu <bkariuki@hotmail.com>
  */
  const getCategories = async (
    page: number = 1,
    term: null | string = null
  ): Promise<IPaginatedCategoryResponse> => {
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
  }

  // Return the function results.
  return {
    searchTerm,
    filterTerm,
    categories,
    businesses,
    hasCategories,
    hasBusinesses,
    getCategories,
    getBusinesses,
    updateBusiness
  };
};
