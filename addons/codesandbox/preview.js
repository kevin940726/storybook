import React from 'react';
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/client-api';

// eslint-disable-next-line react/prop-types
const Code = ({ 'data-codesandbox-url': codesandboxURL, ...props }) => {
  return React.createElement(
    'div',
    { style: { position: 'relative' } },
    React.createElement(CodeOrSourceMdx, props),
    codesandboxURL &&
      React.createElement(
        'a',
        {
          href: codesandboxURL,
          target: '_blank',
          rel: 'noopener',
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
          },
        },
        React.createElement('img', {
          alt: 'Edit on CodeSandbox',
          src: 'https://codesandbox.io/static/img/play-codesandbox.svg',
          height: 30,
        })
      )
  );
};

addParameters({
  docs: {
    components: {
      code: Code,
    },
  },
});
