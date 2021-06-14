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
  const blogComponentTemplate = resolve(`./src/templates/BlogDetail/index.tsx`);
  const hireDedicatedDeveloperTemplate = resolve(
    "./src/templates/HireDedicatedDeveloperDetail/index.tsx",
  );

  const serviceContext = await graphql(`
    query {
      allContentfulServiceModel {
        nodes {
          slug
        }
      }
    }
  `);

  const blogContext = await graphql(`
    query {
      allContentfulBlogPostModel {
        nodes {
          slug
        }
      }
    }
  `);

  const dedicatedDevelopersContext = await graphql(`
    query {
      allContentfulHireDedicatedDeveloperModel {
        nodes {
          slug
        }
      }
    }
  `);

  const locs = ["", "/pune", "/coimbatore", "/hyderabad"];

  dedicatedDevelopersContext.data.allContentfulHireDedicatedDeveloperModel.nodes.forEach(
    ({ slug }) => {
      locs.forEach((each) => {
        createPage({
          path: `${each}/${slug}`,
          component: hireDedicatedDeveloperTemplate,
          context: {
            slug,
          },
        });
      });
    },
  );

  serviceContext.data.allContentfulServiceModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      component: serviceComponentTemplate,
      context: {
        slug,
      },
    });
  });

  blogContext.data.allContentfulBlogPostModel.nodes.forEach(({ slug }) => {
    locs.forEach((each) => {
      createPage({
        path: `${each}/${slug}`,
        component: blogComponentTemplate,
        context: {
          slug,
        },
      });
    });
  });
};
