const { resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const serviceComponentTemplate = resolve(`./src/templates/ServiceDetail/index.tsx`);
//   const blogComponentTemplate = resolve(`./src/templates/BlogDetail/index.tsx`);

//   const serviceContext = await graphql(`
//     query {
//       allContentfulServiceRef {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   const blogsContext = await graphql(`
//     query GET_ALL_BLOGS {
//       allContentfulBlogModelRef {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   serviceContext.data.allContentfulServiceRef.edges.forEach(({ node: { slug } }) => {
//     createPage({
//       path: `${slug}`,
//       component: serviceComponentTemplate,
//       context: {
//         slug,
//       },
//     });
//   });

//   blogsContext.data.allContentfulBlogModelRef.edges.forEach(({ node: { slug } }) => {
//     createPage({
//       path: `${slug}`,
//       component: blogComponentTemplate,
//       context: {
//         slug,
//       },
//     });
//   });
// };
