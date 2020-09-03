import styled from 'styled-components';

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;
  z-index: 0;
  transition: width 1s;
  display: flex;
  justify-self: center;
  width: 100%;

  &:hover {
    width: 120%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;
