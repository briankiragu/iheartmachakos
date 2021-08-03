module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx'
        ]
      }
    }
  },
};
