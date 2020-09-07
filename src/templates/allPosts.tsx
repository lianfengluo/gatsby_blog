import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
  SEO,
} from 'src/components';
import { H1, P } from 'src/wrappers';

interface PropsItf {
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            slug: string;
            title: string;
            excerpt: string;
            date: string;
          };
        };
      }[];
    };
  };
}

const AllPosts: React.FC<PropsItf> = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previousPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const nextPage = `${currentPage + 1}`;

  const posts = data.allMdx.edges;
  return (
    <Container>
      <SEO />
      <FeatureImage />
      <Content>
        <H1
          textAlign="center"
          size="4rem"
          weight={'bold'}
          margin="0 0 1rem 0"
          color={'rgb(26.1%, 56.6%, 99.7%)'}
        >
          Richard's Blog
        </H1>
        <P color="dark3" textAlign="center">
          This is the blog built using gatsby / typescript.
        </P>
        {posts.map((post) => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      {numPages !== 1 && (
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </Container>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
