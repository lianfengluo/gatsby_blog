import styled from 'styled-components';

interface PropsItf {
  theme: any;
}

export const ContentWrapper = styled.main<PropsItf>`
  grid-column: 4 / span 8;
  grid-row: 3 / span5;
  background-color: ${(props) => props.theme.colors.light2};
  padding: ${(props) =>
    `${props.theme.spacings.xl} ${props.theme.spacings.xxl}`};
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  display: relative;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    padding: ${(props) =>
      `${props.theme.spacings.m} ${props.theme.spacings.l}`};
  }
`;
