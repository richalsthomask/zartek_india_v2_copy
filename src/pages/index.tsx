import App from "@/components/App";
import { graphql, PageProps, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Home: FC<PageProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_HOME_PAGE_CONTENT_KOCHI {
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

            serviceArea {
              title
              description {
                description
              }

              services {
                id
                title
                description
                icon {
                  file {
                    url
                  }
                }
                routerLink
              }
            }

            featureArea {
              position
              image {
                file {
                  url
                }
              }

              points {
                id
                title
                description {
                  description
                }
              }
            }

            testimonials {
              id
              reviewerName
              reviewerRole
              reviewerProfilePic {
                file {
                  url
                }
              }
              review
            }
          }
        }
      `}
      render={({ contentfulHomePage }) => <App contentfulHomePage={contentfulHomePage} />}
    />
  );
};

export default Home;
