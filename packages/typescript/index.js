module.exports = {
  extends: '@yungezeit/base',
  overrides: [
    {
      files: [
        '*.js',
        '*.jsx',
        '*.cjs',
        '*.mjs',
        '*.ts',
        '*.tsx',
        '*.cts',
        '*.mts',
        '*.d.ts',
        '*.vue',
        '*.svelte',
      ],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
      ],
      overrides: [
        {
          files: ['**/*.test.ts'],
          rules: {
            'max-classes-per-file': 'off',
            'no-new': 'off',
          },
        },
      ],
      rules: {
        // Import configuration override.
        // (@yungezeit/base overriden by current file's plugin:import/typescript)
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-cycle': 'off',
        // TypeScript overrides.
        'no-undef': 'off',
        'naming-convention': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        quotes: 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
        '@typescript-eslint/no-useless-constructor': ['error'],
        // TypeScript-specific rules.
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

        // The following rules require `parseOptions.project` to be set.
        // This should be project-specific.
        'no-throw-literal': 'off',
        'no-implied-eval': 'off',
        'dot-notation': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/dot-notation': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/1824
        '@typescript-eslint/indent': 'off',

        // Who cares tbh, this gets really annoying when working with TypeScript's
        // path aliases and remapping all these on a per-project basis would be
        // overkill when this rule does not seem to bring much benefit.
        'import/extensions': 'off',
      },
    },
  ],
};
