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
    color: rgba(7%, 0%, 0%, 50%);
    justify-self: flex-end;
    border-radius: 50%;
    border: 3px solid rgba(7%, 0%, 0%, 50%);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
      border: 3px solid rgba(7%, 0%, 0%, 80%);
      color: rgba(7%, 0%, 0%, 80%);
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;
