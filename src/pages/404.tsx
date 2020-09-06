import React from 'react';
import { graphql } from 'gatsby';
import { Container, Content, FeatureImage } from 'src/components';
import { H1 } from 'src/wrappers';

const NotFound: React.FC<{ data: any }> = ({ data }) => {
  const featureImage = data.imageSharp.fluid;
  return (
    <Container>
      <FeatureImage fluid={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0" color="red">
          {' '}
          This URL is not valid....
        </H1>
      </Content>
    </Container>
  );
};

export default NotFound;

export const NotFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fluid: { originalName: { eq: "404.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
