/* eslint-disable no-shadow */
/* eslint-disable no-console */

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
  },

  log: (type, ...args) => {
    console.log(type, ...args);
  },

  compiledCache: {
    set: (key, str) => {
      // naive storage space management
      for (; ;) {
        try {
          // doc: https://developer.mozilla.org/en-US/docs/Web/API/Storage
          window.localStorage.setItem(key, str);
          break;
        } catch (ex) {
          // handle: Uncaught DOMException:
          // Failed to execute 'setItem' on 'Storage':
          // Setting the value of 'XXX' exceeded the quota
          window.localStorage.removeItem(window.localStorage.key(0));
        }
      }
    },

    get: (key) => window.localStorage.getItem(key),
  },

  additionalModuleHandlers: {
    '.json': (source, _path, _options) => JSON.parse(source),
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
const loadSFC = (string) => Vue.defineAsyncComponent(() =>
  loadModule(`./src/js/${string}`, options)
);

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
