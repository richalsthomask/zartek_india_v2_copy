import App from "@/components/App";
import { graphql, PageProps, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Home: FC<PageProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          contentfulHomePage(use: { eq: "Use This space to access Home Page - Kochi" }) {
            welcomeArea {
              title
              description {
                description
              }

              option1 {
                title
                link
              }

              option2 {
                title
                link
              }

              applets {
                id
                appTitle
                redirectLink
                appIcon {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({ contentfulHomePage }) => <App contentfulHomePage={contentfulHomePage} />}
    />
  );
};

export default Home;
