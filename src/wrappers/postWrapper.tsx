import styled from 'styled-components';

interface PropsItf {
  theme: any;
}

export const PostWrapper = styled.main<PropsItf>`
  grid-column: 4 / span 8;
  grid-row: 3 / span5;
  background-color: ${(props) => props.theme.colors.light2};
  padding: ${(props) =>
    `${props.theme.spacings.xl} ${props.theme.spacings.xxl}`};
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  display: relative;
  z-index: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.dark1};
  }
  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }
  h1 {
    font: 400 2.25rem;
    line-height: 2.5rem;
  }
  h2 {
    font: 400 1.5rem;
    line-height: 1.875rem;
  }
  h3 {
    font: 700 1.375rem;
    line-height: 1.625rem;
  }
  h4 {
    font: 400 1.25rem;
    line-height: 1.5rem;
  }
  h5 {
    font: 700 1.125rem;
    line-height: 1.375rem;
  }
  h6 {
    font: 700 1rem;
    line-height: 1.125rem;
    text-transform: uppercase;
  }
  p {
    font: 400 1.125rem;
    line-height: 1.875rem;
    color: ${(props) => props.theme.colors.light2};
    margin-top: 2rem;
  }
  a {
    color: ${(props) => props.theme.colors.main1};
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  del {
    text-decoration: line-through;
  }
  blockquote p {
    font: italic 1.5rem 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: ${(props) => props.theme.colors.dark2};
    color: 1rem 0 1rem 2rem;
  }
  li {
    margin: 0.25rem 0;
  }

  code {
    font: 1rem 1.875rem ${(props) => props.theme.fonts.code};
    color: ${(props) => props.theme.colors.light1};
    background-color: ${(props) => props.theme.colors.dark3};
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${(props) => props.theme.colors.dark1};
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font: 400 1rem 1.5rem;
  }
  th {
    font-weight: 700;
  }
  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.dark3};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    padding: ${(props) =>
      `${props.theme.spacings.m} ${props.theme.spacings.l}`};
  }
`;
