import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from 'src/components';
import { H1, P } from 'src/wrappers';

interface AllPostsItf {
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

const AllPosts: React.FC<AllPostsItf> = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previousPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const nextPage = `${currentPage + 1}`;

  const posts: any[] = data.allMdx.edges;
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Richard's Blog
        </H1>
        <P color="dark2" textAlign="center">
          This is the blog built using gatsby/typescript.
        </P>
        {posts.map((post) => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          ></ContentCard>
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
