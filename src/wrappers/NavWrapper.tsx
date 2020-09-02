import styled from 'styled-components';

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  a {
    height: 100%;
    overflow: hidden;
    img {
      max-height: 100%;
      object-fit: contain;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;
