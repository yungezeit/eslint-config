module.exports = {
  extends: '@yungezeit/typescript',
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'import/no-mutable-exports': 'off',
    'prefer-const': 'off',
    'import/first': 'off',
    'no-undef-init': 'off',
  },
  ignorePatterns: ['!lib'],
  settings: {
    'svelte3/typescript': true,
  },
};
