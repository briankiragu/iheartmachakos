import { createApp } from 'vue';
import BusinessDirectory from './js/components/BusinessDirectory.vue';

// Create the Vue instance.
const app = createApp({
  components: { BusinessDirectory }
});

// Mount the application.
app.mount('#app-3');
