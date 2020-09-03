import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FeatureImageWrapper } from 'src/wrappers';

export const FeatureImage: React.FC<{
  fluid?: FluidObject | FluidObject[];
}> = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "SE.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);
  return (
    <FeatureImageWrapper>
      <Img
        fluid={fluid || data.imageSharp.fluid}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </FeatureImageWrapper>
  );
};
