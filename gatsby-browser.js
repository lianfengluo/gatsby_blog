import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Table } from './src/components';
import Theme from './src/themes/theme';

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
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
);
