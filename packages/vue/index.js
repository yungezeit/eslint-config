module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@yungezeit/typescript',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  rules: {
  },
};
