import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Post, FeatureImage, SEO } from 'src/components';
import { H1 } from 'src/wrappers';
import { FluidObject } from 'gatsby-image';

interface PropsItf {
  pageContext: {
    id: string;
  };
  data: {
    mdx: {
      body: string;
      frontmatter: {
        slug: string;
        title: string;
        excerpt: string;
        featureImage: {
          publicURL: string;
          childImageSharp: {
            fluid: FluidObject | FluidObject[];
          };
        };
        date: string;
      };
    };
  };
}

const SinglePost: React.FC<PropsItf> = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid;
  const SEOImage = data.mdx.frontmatter.featureImage.publicURL;

  return (
    <Container>
      <SEO
        title={data.mdx.frontmatter.title}
        image={SEOImage}
        description={data.mdx.frontmatter.excerpt}
      />
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
        excerpt
        date(formatString: "MMMM DD, YYYY")
        featureImage {
          publicURL
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
