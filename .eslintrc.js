module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'no-undef': 'off',
  },
}
