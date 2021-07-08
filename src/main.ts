import { createApp } from 'vue';

import BusinessList from './js/components/BusinessList.vue';

// Create the Vue instance.
const app = createApp({
  components: { BusinessList },
});

// Mount the application.
app.mount('#app-3');
