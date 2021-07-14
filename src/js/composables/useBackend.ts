/* eslint-disable import/extensions */
import { computed, Ref, ref } from "vue";
import { IBusiness, IBusinessForm, ICategory, IPaginatedBusinessResponse, IPaginatedCategoryResponse } from "../../interfaces";

// API Base URI.
const baseUrl: string = 'https://heartofkenya.com';

/**
 * Get form data from the input object.
 *
 * @param input User input from form
 * @returns {FormData} data
 *
 * @author Brian K. Kiragu <bkariuki@hotmail.com>
 */
const getFormData =
  (input: any, formId: string = 'BusinessDirectory'): FormData => {
    const data = new FormData();
    Object.keys(input).forEach((key) => data.append(key, input[key]));
    data.append('formid', formId);
    return data;
  };


export default function useBackend() {
  const searchTerm: Ref<string> = ref('');
  const filterTerm: Ref<string> = ref('');
  const categories: Ref<ICategory[]> = ref([
    {
      "param": "beauty",
      "title": "Beauty and Health",
      "status": "Active"
    },
    {
      "param": "bookstores",
      "title": "Book Stores",
      "status": "Active"
    },
    {
      "param": "clothing",
      "title": "Clothing Store",
      "status": "Active"
    }
  ]);
  const businesses: Ref<IBusiness[]> = ref([
    {
      "directoryIdx": 4,
      "category": "Beauty",
      "title": "Ruth Beauty Parlour",
      "city": "Machakos",
      "owner": "Bernard",
      "website": ""
    },
    {
      "directoryIdx": 1,
      "category": "bookstores",
      "title": "Chap Chap Enterprise",
      "city": "Machakos",
      "owner": "Richard Wasike",
      "website": null
    },
    {
      "directoryIdx": 3,
      "category": "bookstores",
      "title": "Helima",
      "city": "Machakos",
      "owner": "",
      "website": ""
    },
    {
      "directoryIdx": 2,
      "category": "bookstores",
      "title": "Nehama Bookshop",
      "city": "Machakos",
      "owner": "",
      "website": ""
    }
  ]);

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
  const storeBusiness = async (data: IBusinessForm): Promise<object> => {
    // Get the query params.
    const urlParams: string = new URLSearchParams({
      cmd: 'custom',
      subcmd: 'saveRecord',
      config: 'directoryMachakosJson'
    }).toString();

    // Set the request endpoint.
    const endpoint = `${baseUrl}/jcmd?${urlParams}`;

    // Launch the request.
    const response = await fetch(endpoint, {
      method: 'POST',
      body: getFormData(data, 'BusinessDirectory')
    });

    // Check for errors.
    if (!response.ok) {
      throw new Error(`There was an error ${response.statusText}`);
    }

    // Get the data from the request.
    return response.json();
  }

  /**
   * Function to add a new business.
   *
   * @author Brian K. Kiragu <bkariuki@hotmail.com>
   */
  const updateBusiness = async (
    directoryId: number,
    data: IBusinessForm
  ): Promise<object> => {
    // Get the query params.
    const urlParams: string = new URLSearchParams({
      cmd: 'custom',
      subcmd: 'saveRecord',
      config: 'directoryMachakosJson'
    }).toString();

    // Set the request endpoint.
    const endpoint = `${baseUrl}/jcmd?${urlParams}`;

    // Launch the request.
    const response = await fetch(endpoint, {
      method: 'POST',
      body: getFormData(data, 'BusinessDirectory')
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
    storeBusiness,
    updateBusiness
  };
};
