import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Post, FeatureImage } from 'src/components';
import { H1 } from 'src/wrappers';
import { FluidObject } from 'gatsby-image';

interface AllPostsItf {
  pageContext: {
    id: string;
  };
  data: {
    mdx: {
      body: string;
      frontmatter: {
        slug: string;
        title: string;
        featureImage: {
          childImageSharp: {
            fluid: FluidObject | FluidObject[];
          };
        };
        date: string;
      };
    };
  };
}
const SinglePost: React.FC<AllPostsItf> = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid;
  return (
    <Container>
      <FeatureImage fluid={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  );
};

export default SinglePost;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
