// API Base URI.
const baseUrl = 'https://heartofkenya.com';

export default function useBackend() {
  const searchTerm = Vue.ref('');
  const filterTerm = Vue.ref('');
  const categories = Vue.ref([
    {
      "param": "beauty",
      "title": "Beauty and Health",
      "status": "Active"
    },
    {
      "param": "bookstores",
      "title": "Book Stores",
      "status": "Active"
    }
  ]);
  const businesses = Vue.ref([
    {
      "directoryIdx": 4,
      "worldid": "kenyaheart",
      "library": "Machakos",
      "category": "Beauty",
      "title": "Ruth Beauty Parlour",
      "owner": "Bernard",
      "website": "",
      "city": "Machakos",
      "localowned": null,
      "status": "Active",
      "modified": "4/16/2021 11:55:35 PM"
    },
    {
      "directoryIdx": 1,
      "worldid": "kenyaheart",
      "library": "machakos",
      "category": "bookstores",
      "title": "Chap Chap Enterprise",
      "owner": "Richard Wasike",
      "website": null,
      "city": "Machakos",
      "localowned": "true",
      "status": "Active",
      "modified": ""
    }
  ]);

  const hasCategories = Vue.computed(() => categories.value.length > 0)
  const hasBusinesses = Vue.computed(() => businesses.value.length > 0)

  /**
   * Function to query endpoint.
   *
   * @param page {number} The page number.
   * @param term {null | string} The search term
   * @returns Promise<IBusiness[]>
   * @author Brian K. Kiragu <bkariuki@hotmail.com>
   */
  const getBusinesses = async (
    page = 1,
    term = null
  ) => {
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
  const updateBusiness = async (data) => {
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
    page = 1,
    term = null
  ) => {
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
