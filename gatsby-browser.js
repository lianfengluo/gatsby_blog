import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Table, Code } from './src/components';
import Theme from './src/themes/theme';
require('./language-tabs.css');

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html, #___gatsby {
    font-family: ${(props) => props.theme.fonts.main};
    height: 100%;
    background-color: ${(props) => props.theme.colors.light1};
  }
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
);
