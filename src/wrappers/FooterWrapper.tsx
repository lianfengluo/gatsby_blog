import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  grid-column: 1 / -1;
  min-height: 11.25rem;
  padding: 3rem 0 0 0;
  background-color: ${(props) => props.theme.colors.dark4};
  justify-content: center;
  display: flex;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;

  & p {
    text-align: center;
    flex: 0 0 100;
  }
`;

export const FooterSocialIcons = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  & img {
    padding: 0 1rem;
    transition: all 1s ease;
    height: 22px;

    &:hover,
    &:focus {
      opacity: 0.5;
      height: 28px;
    }
  }
`;
