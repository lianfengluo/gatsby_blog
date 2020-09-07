// require('source-map-support').install();
require('ts-node').register();
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data } = await graphql(`
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

  // create paginated pages for posts
  const postPerPage = 5;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  for (let i = 0; i < numPages; ++i) {
    actions.createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve(__dirname, './src/templates/allPosts.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  }

  // create signal blog post
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/${slug}`,
      component: path.resolve(__dirname, './src/templates/singlePost.js'),
      context: { id },
    });
  });
};
