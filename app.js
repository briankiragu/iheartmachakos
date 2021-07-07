const { loadModule } = window['vue3-sfc-loader'];

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

const app = Vue.createApp({
  components: {
    'hello-world': Vue.defineAsyncComponent(() => loadModule('./src/js/components/HelloWorld.vue', options))
  },
});

app.mount('#app');