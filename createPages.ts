import { GatsbyNode } from 'gatsby';
const path = require(`path`);

interface DataItf {
  data?: {
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

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data } : DataItf = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  if (!data) return;

  // create paginated pages for posts
  const postPerPage = 5;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  for (let i = 0; i < numPages; ++i) {
    actions.createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve(__dirname, './src/templates/allPosts.tsx'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  }

  // create signal blog post
  data.allMdx.edges.forEach((edge: any) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/${slug}`,
      component: path.resolve(__dirname, './src/templates/singlePost.tsx'),
      context: { id },
    });
  });
};
export default createPages;
