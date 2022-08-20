module.exports = {
  extends: '@yungezeit/typescript',
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['plugin:react/recommended'],
      rules: {
        'jsx-quotes': [
          'error',
          'prefer-double',
        ],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
