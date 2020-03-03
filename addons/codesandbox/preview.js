import React from 'react';
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/client-api';

// eslint-disable-next-line react/prop-types
const Code = ({ 'data-codesandbox-url': codesandboxURL, ...props }) => {
  return React.createElement(
    'div',
    { style: { position: 'relative' } },
    React.createElement(CodeOrSourceMdx, {
      ...props,
      actions: defaultActions =>
        React.createElement(
          React.Fragment,
          null,
          codesandboxURL &&
            React.createElement(
              'a',
              {
                href: codesandboxURL,
                target: '_blank',
                rel: 'noopener',
                style: { display: 'inline-flex' },
              },
              React.createElement('img', {
                src: 'https://codesandbox.io/static/img/play-codesandbox.svg',
                alt: 'Edit on CodeSandbox',
                height: 25,
              })
            ),
          ...defaultActions
        ),
    })
  );
};

addParameters({
  docs: {
    components: {
      code: Code,
    },
  },
});
