import styled from 'styled-components';
import { Link } from 'gatsby';

interface PropsItf {
  isFirst: boolean;
  isLast: boolean;
  theme: any;
}

export const PaginationWrapper = styled.div<PropsItf>`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a:nth-child(1) {
    color: ${(props) =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isFirst ? 'none' : 'auto')};
    cursor: ${(props) => (props.isFirst ? 'default' : 'pointer')};
  }

  a:nth-child(2) {
    color: ${(props) =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isLast ? 'none' : 'auto')};
    cursor: ${(props) => (props.isLast ? 'default' : 'pointer')};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;

export const PaginationElement = styled(Link)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 600;
  margin: 0 2rem;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
