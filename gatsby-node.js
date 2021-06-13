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
  let baseURL = "";

  if (typeof window !== "undefined") {
    const url = window.location.href?.split("/")[3];

    if (url === "pune" || url === "coimbatore" || url === "hyderabad") {
      baseURL = `/${url}`;
    } else {
      baseURL = "";
    }
  }

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

  console.log(baseURL);

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
    ["", "/pune", "/coimbatore", "/hyderabad"].forEach((each) => {
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
