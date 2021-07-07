module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};
