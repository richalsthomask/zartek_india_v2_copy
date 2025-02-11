import App from "@/components/App";
import { graphql, PageProps, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Home: FC<PageProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_HOME_PAGE_CONTENT_COIMBATORE {
          contentfulHomePage(use: { eq: "Use This space to access Home Page - Coimbatore" }) {
            #
            structuredDataSnippets {
              snippet {
                id
                snippet
              }
            }
            # SEO
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            #     Welcome banner
            welcomeArea {
              backgroundImage {
                file {
                  url
                }
              }
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

            #     Top Services

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

            #     Features Offered

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
            #     Testimonials

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

            #Company Stats

            statsContainer {
              id
              title
              description {
                description
              }
            }

            #FAQS

            faQs {
              id
              question
              answer {
                answer
              }
            }
          }
        }
      `}
      render={({ contentfulHomePage }) => (
        <App contentfulHomePage={contentfulHomePage} url="/coimbatore/" />
      )}
    />
  );
};

export default Home;
