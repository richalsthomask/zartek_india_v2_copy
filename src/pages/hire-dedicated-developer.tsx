import HireDevelopers from "@/components/HireDedicatedDevs";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

const HireDedicatedDevelopers: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query HIRE_DEDICATED_DEVELOPERS_KOCHI {
          contentfulHireDedicatedDevelopersPage(
            use: { eq: "Use This space to access Hire Dedicated Devs Page - Kochi" }
          ) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            whyHireTitle
            whyHireCards {
              id
              icon {
                file {
                  url
                }
              }
              title
              description
            }
            contentSectionTop {
              title
              position
              image {
                file {
                  url
                }
              }
              content {
                content
              }
              learnMoreLink
            }
            testimonialTitle
            testimonials {
              id
              userName
              userDesignation
              profilePic {
                file {
                  url
                }
              }
              feedback {
                feedback
              }
              rating
            }

            contentSectionBottom {
              title
              position
              image {
                file {
                  url
                }
              }
              content {
                content
              }
              learnMoreLink
            }

            list {
              id
              slug

              cardIcon {
                file {
                  url
                }
              }
              cardTitle
              cardDescription
            }

            faQs {
              id
              question
              answer {
                answer
              }
            }

            # Footer Content
            footerContent {
              raw
            }
          }
        }
      `}
      render={({ contentfulHireDedicatedDevelopersPage }) => (
        <HireDevelopers {...contentfulHireDedicatedDevelopersPage} />
      )}
    />
  );
};

export default HireDedicatedDevelopers;
