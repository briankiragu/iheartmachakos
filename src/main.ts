import { createApp } from 'vue';

import BusinessList from './js/components/BusinessList.vue';

// Create the Vue instance.
const app = createApp({
  components: { BusinessList },
  data() {
    return {
      people: [
        { id: 32123424, name: 'James Veitch', age: 28 },
        { id: 62164364, name: 'Libro Manhaam', age: 32 },
      ]
    }
  }
});

// Mount the application.
app.mount('#app-3');
