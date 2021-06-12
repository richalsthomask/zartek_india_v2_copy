const { resolve } = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const serviceComponentTemplate = resolve(`./src/templates/ServiceDetail/index.tsx`);

  const serviceContext = await graphql(`
    query {
      allContentfulServiceModel {
        nodes {
          slug
        }
      }
    }
  `);

  serviceContext.data.allContentfulServiceModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      component: serviceComponentTemplate,
      context: {
        slug,
      },
    });
  });
};
