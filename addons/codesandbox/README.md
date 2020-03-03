# CodeSandbox for Storybook docs

> migration guide: This page documents the method to configure storybook introduced recently in 5.3.0, consult the [migration guide](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md) if you want to migrate to this format of configuring storybook.

Turn your code blocks in docs into live CodeSandbox via [`remark-codesandbox`](https://github.com/kevin940726/remark-codesandbox).

- [CodeSandbox for Storybook docs](#codesandbox-for-storybook-docs)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Options](#options)

## Installation

First add the package. Make sure that the versions for your `@storybook/*` packages match:

```sh
yarn add -D @storybook/addon-codesandbox@next
```

Then add the addon **after** `@storybook/addon-docs` to your `.storybook/main.js` list of `addons`:

```js
module.exports = {
  // other settings
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-codesandbox',
  ];
}
```

## Usage

Add a special _meta_ tag to your code blocks.

````md
```js codesandbox=react
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello @storybook/addon-codesandbox!</h1>, document.getElementById('root'));
```
````

See the [documentation of `remark-codesandbox`](https://github.com/kevin940726/remark-codesandbox#documentation) for more example usages!

## Options

All [options from `remark-codesandbox`](https://github.com/kevin940726/remark-codesandbox#options) are supported, with the following defaults.

```js
options = {
  mode: 'button',
};
```

Add your options in the `addons` list:

```js
module.exports = {
  // other settings
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-codesandbox',
      options: {
        mode: 'button',
        autoDeploy: true,
      },
    },
  ];
}
```
