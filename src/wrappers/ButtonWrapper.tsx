import styled from 'styled-components';
import { Link } from 'gatsby';

interface stylePropsItf {
  theme: any;
}

export const ButtonWrapper = styled(Link)`
  padding: 0.5rem 0.75rem;
  background-color: ${(props: stylePropsItf) => props.theme.colors.main1};
  border-radius: 0.5rem;
  color: ${(props: stylePropsItf) => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.5 ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(120%);
  }
`;
