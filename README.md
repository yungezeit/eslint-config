# @yungezeit/eslint-config

[![npm](https://img.shields.io/npm/v/@yungezeit/eslint-config?color=a1b858&label=latest%20version)](https://npmjs.com/package/@yungezeit/eslint-config)

> Monorepo architecture tweaked from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config/)

Personal ESLint config presets based on airbnb rules and other recommended presets. Used for:
* Linting JavaScript files
* Linting TypeScript files
* Linting Vue 3 applications
* Linting React applications
* Linting YML files
* Linting JSON files
* Ensuring consistent package.json properties order


## Usage

### 1. Install

#### Quick way: install the whole configuration

```bash
# Using pnpm
pnpm add -D eslint @yungezeit/eslint-config
# Using yarn
yarn add -D eslint @yungezeit/eslint-config
# Using npm
npm i -D eslint @yungezeit/eslint-config
```

See [Presets](#presets) to refine your configuration install

### 2. Configure ESLint

Set the [`extends`](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) property of [ESLint's configuration](https://eslint.org/docs/user-guide/configuring/configuration-files) :

```json
{
  "extends": "@yungezeit"
}
```

### 3. Add scripts in `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 4. Enable VS Code autofix

Create/edit the `.vscode/settings.json` file and add the following:

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "yaml",
    "json",
    "jsonc",
    "json5"
  ]
}
```

This will autofix files on save and let ESLint handle code formatting.

## Presets

### Base preset

> `@yungezeit/eslint-config-base`

This preset extends the following ones:
* [`airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
* [`plugin:import/recommended`](https://github.com/import-js/eslint-plugin-import)
* [`plugin:jsonc/recommended-with-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc)
* [`plugin:yml/standard`](https://github.com/ota-meshi/eslint-plugin-yml)
* [`plugin:markdown/recommended`](https://github.com/eslint/eslint-plugin-markdown)

### TypeScript preset

> `@yungezeit/eslint-config-typescript`

This preset extends the following ones:
* [`plugin:import/typescript`](https://github.com/import-js/eslint-plugin-import)
* [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint)
* [`airbnb-typescript/base`](https://github.com/iamturns/eslint-config-airbnb-typescript)
* [`@yungezeit/base`](#base-preset)


### React preset

> `@yungezeit/eslint-config-react`

This preset extends the following ones:

* [`plugin:react/recommended`](https://github.com/jsx-eslint/eslint-plugin-react)
* [`@yungezeit/typescript`](#typescript-preset)

### Vue 3 preset

> `@yungezeit/eslint-config-vue`

This preset extends the following ones:

* [`plugin:vue/vue3-recommended`](https://github.com/vuejs/eslint-plugin-vue)
* [`@yungezeit/typescript`](#typescript-preset)

### Svelte preset

> `@yungezeit/eslint-config-svelte`

This preset extends the following ones:

* [`@yungezeit/typescript`](#typescript-preset)
* [`eslint-plugin-svelte3`](https://github.com/sveltejs/eslint-plugin-svelte3)

### Storybook

> `@yungezeit/eslint-config-storybook`

This preset extends the following ones:

* [`@yungezeit/base`](#base-preset)
* [`plugin:storybook/recommended`](https://github.com/storybookjs/eslint-plugin-storybook)