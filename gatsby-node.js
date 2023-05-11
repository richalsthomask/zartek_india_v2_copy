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
  const trainingComponentTemplate = resolve(`./src/templates/TrainingDetail/index.tsx`);
  const blogComponentTemplate = resolve(`./src/templates/BlogDetail/index.tsx`);
  const hireDedicatedDeveloperTemplate = resolve(
    "./src/templates/HireDedicatedDeveloperDetail/index.tsx",
  );
  const solutionComponentTemplate = resolve(`./src/templates/SolutionDetail/index.tsx`);
  const customePageComponentTemplate = resolve(`./src/templates/Custom/index.tsx`);
  const customePageComponentRichTextTemplate = resolve(`./src/templates/Custom/RichTextView.tsx`);
  const moreSolutionComponentRichTextTemplate = resolve(
    `./src/templates/SolutionDetail/MoreSolutionDetailModel/index.tsx`,
  );

  const portfolioDetailTemplate = resolve("./src/templates/PortfolioDetail/index.tsx");

  const serviceContext = await graphql(`
    query {
      allContentfulServiceDataModel {
        nodes {
          slug
        }
      }
    }
  `);

  const trainingContext = await graphql(`
    query {
      allContentfulTrainingModel {
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

  const solutionsContext = await graphql(`
    query {
      allContentfulSolutionModel {
        nodes {
          slug
        }
      }
    }
  `);

  const customePageWithHomeUiContext = await graphql(`
    query {
      contentfulCustomPagesWithHomePageTemplate {
        pages {
          slug
        }
      }
    }
  `);

  const customPagesWithRichTextContext = await graphql(`
    query {
      allContentfulCustomPagesWithRichTextTemplate {
        nodes {
          slug
        }
      }
    }
  `);

  const moreSolutionsWeOfferContext = await graphql(`
    query {
      allContentfulSubSolutionModel {
        nodes {
          slug
        }
      }
    }
  `);

  const portfolioDetailContext = await graphql(`
    query {
      allContentfulPortfolioDetailPage {
        nodes {
          slug
        }
      }
    }
  `);

  // const locs = ["", "/pune", "/coimbatore", "/hyderabad"];

  dedicatedDevelopersContext.data.allContentfulHireDedicatedDeveloperModel.nodes.forEach(
    ({ slug }) => {
      // locs.forEach((each) => {
      createPage({
        path: `${slug}`,
        component: hireDedicatedDeveloperTemplate,
        context: {
          slug,
        },
      });
      // });
    },
  );

  serviceContext.data.allContentfulServiceDataModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      component: serviceComponentTemplate,
      context: {
        slug,
      },
    });
  });

  trainingContext.data.allContentfulTrainingModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      component: trainingComponentTemplate,
      context: {
        slug,
      },
    });
  });

  blogContext.data.allContentfulBlogPostModel.nodes.forEach(({ slug }) => {
    // locs.forEach((each) => {
    createPage({
      path: `${slug}`,
      component: blogComponentTemplate,
      context: {
        slug,
      },
      // });
    });
  });

  solutionsContext.data.allContentfulSolutionModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      component: solutionComponentTemplate,
      context: {
        slug,
      },
    });
  });

  customePageWithHomeUiContext.data.contentfulCustomPagesWithHomePageTemplate.pages.forEach(
    ({ slug }) => {
      createPage({
        path: `${slug}`,
        component: customePageComponentTemplate,
        context: {
          slug,
        },
      });
    },
  );

  customPagesWithRichTextContext.data.allContentfulCustomPagesWithRichTextTemplate.nodes.forEach(
    ({ slug }) => {
      createPage({
        path: `${slug}`,
        context: {
          slug,
        },
        component: customePageComponentRichTextTemplate,
      });
    },
  );

  moreSolutionsWeOfferContext.data.allContentfulSubSolutionModel.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      context: {
        slug,
      },
      component: moreSolutionComponentRichTextTemplate,
    });
  });

  portfolioDetailContext.data.allContentfulPortfolioDetailPage.nodes.forEach(({ slug }) => {
    createPage({
      path: `${slug}`,
      context: {
        slug,
      },
      component: portfolioDetailTemplate,
    });
  });
};
