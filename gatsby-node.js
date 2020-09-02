// exports.createPages = async ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { data } = await graphql(`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         nodes {
//           frontmatter {
//             slug
//           }
//           id
//         }
//       }
//     }
//   `);

//   // create paginated pages for posts
//   const postPerPage = 3;
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
//   Array.from({ length: numPages }).forEach(_, (i) => {
//     actions.createPages({
//       path: i === 0 ? '/' : `/${i + 1}`,
//       component: require.resolve('/src/templates/allPosts.tsx'),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     });
//   });
//   // create signal blog post
//   data.allMdx.edges.forEach((edges) => {
//     const slug = edges.nodes.frontmatter.slug;
//     const id = edges.nodes.id;
//     actions.createPages({
//       path: slug,
//       component: require.resolve('/src/templates/singlePost.tsx'),
//       context: { id },
//     });
//   });
// };
