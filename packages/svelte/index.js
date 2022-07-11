module.exports = {
  extends: [
    '@yungezeit/typescript',
  ],
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
  },
  settings: {
    'svelte3/typescript': true,
  },
};
