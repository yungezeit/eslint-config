module.exports = {
  extends: '@yungezeit/typescript',
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        '@yungezeit/typescript',
        'plugin:vue/vue3-recommended',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
        'vue/no-v-html': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/multi-word-component-names': 'off',
        // Vue files overrides.
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
        'vue/v-bind-style': ['error', 'shorthand'],
      },
    },
  ],
  ignorePatterns: ['!.storybook'],
};
