import styled from 'styled-components';

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    height: 30px;
  }

  .go-back {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
    color: rgb(26.1%, 56.6%, 99.7%);
    justify-self: flex-end;

    &:hover,
    &:focus {
      filter: brightness(120%);
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;
