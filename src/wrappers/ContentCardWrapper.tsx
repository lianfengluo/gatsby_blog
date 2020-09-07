import styled from 'styled-components';

export const ContentCardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-title {
    text-decoration: none;
    &:hover {
      filter: brightness(90%);
    }
  }
`;
