// Vue SFC Loader.
const { loadModule } = window['vue3-sfc-loader'];

/**
 * Vue SFC Loader Options.
 * These are the options used by the sfc-loader to load the components.
 *
 * @author Brian K. Kiragu <bkariuki@hotmail.com>
 */
const options = {
  moduleCache: { vue: Vue },

  getFile: (url) => fetch(url)
    .then((res) => res.ok ? res.text() : Promise.reject(res)),

  addStyle: (styleStr) => {
    const style = document.createElement('style');
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  }
}

/**
 * Function to load a SFC.
 * NB: All components MUST use CSS at the time of writing this.
 *
 * @param {string} string
 * @returns {AsyncGeneratorFunction}
 * @author Brian K. Kiragu <bkariuki@hotmail.com>
 */
const loadSFC = (string) => Vue.defineAsyncComponent(() => {
  console.log(`./src/js/${string}`)
  return loadModule(`./src/js/${string}`, options)
});

// Assign the custom SFC loader to the window.
window.loadSFC = loadSFC;

// Load Components.
const HelloWorld = loadSFC('components/HelloWorld.vue');
const BusinessList = loadSFC('components/BusinessList.vue');

// Create the Vue instance.
const app = Vue.createApp({
  components: {
    HelloWorld,
    BusinessList,
  },
});

// Mount the application.
app.mount('#app');
