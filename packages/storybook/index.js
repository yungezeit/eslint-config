module.exports = {
  extends: [
    '@yungezeit/base',
    'plugin:storybook/recommended',
  ],
  overrides: [{
    files: ['*.mdx'],
    extends: [
      'plugin:mdx/recommended',
    ],
  }],
};
