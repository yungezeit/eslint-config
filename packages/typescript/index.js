const base = require('@yungezeit/eslint-config-base');

module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    '@yungezeit/base',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  ignorePatterns: [
    '**/*.d.ts',
  ],
  overrides: base.overrides,
  rules: {
    // TypeScript-only overrides.
    'no-undef': 'off',
    'import/extensions': 'off',

    // TypeScript overrides.
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quote-props': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    // TypeScript-specific rules.
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // The following rules require `parseOptions.project` to be set.
    // This should be project-specific.
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/return-await': 'off',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
};
