const codesandbox = require('remark-codesandbox');

exports.webpack = function webpack(baseConfig, options) {
  const pluginOptions = {
    mode: options.mode || 'button',
    query: options.query,
    customTemplates: options.customTemplates,
    autoDeploy: options.autoDeploy,
  };

  const remarkPluginsRules = baseConfig.module.rules
    .filter(rule => rule.test instanceof RegExp && rule.test.test('.stories.mdx'))
    .filter(rule => Array.isArray(rule.use))
    .map(rule => rule.use.find(using => using.loader === '@mdx-js/loader'))
    .map(mdxLoader => mdxLoader && mdxLoader.options && mdxLoader.options.remarkPlugins)
    .filter(Array.isArray);

  if (!remarkPluginsRules.length) {
    throw new Error(
      'Unexpected webpack config. Did you forget to include "@storybook/addon-docs" before "@storybook/addon-codesandbox"?'
    );
  }

  new Set(remarkPluginsRules).forEach(remarkPlugins => {
    if (remarkPlugins.find(plugin => plugin === codesandbox || plugin[0] === codesandbox)) {
      // eslint-disable-next-line no-console
      console.warn(
        '"remark-codesandbox" has already been configured! Skipping "@storybook/addon-codesandbox"...'
      );
      return;
    }

    remarkPlugins.push([codesandbox, pluginOptions]);
  });

  return baseConfig;
};
