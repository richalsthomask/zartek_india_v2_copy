import AboutUs from "@/components/About";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const About: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_ABOUT_US_PAGE_HYDERABAD {
          contentfulAboutUsPage(use: { eq: "Use This space to access About Page - Hyderabad" }) {
            aboutUsContent {
              raw
              references {
                ... on ContentfulParallaxSectionWithTextAndButton {
                  contentful_id
                  id
                  __typename
                  text {
                    text
                  }

                  button {
                    title
                    link
                  }
                }
                ... on ContentfulPillarImageWithScaleToZoomRtModel {
                  contentful_id
                  __typename
                  images {
                    file {
                      url
                    }
                  }
                }

                ... on ContentfulTeamListModelRt {
                  contentful_id
                  __typename
                  teamMembers {
                    id
                    name
                    role
                    about
                    profilePic {
                      file {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAboutUsPage: { aboutUsContent } }) => (
        <AboutUs aboutUsContent={aboutUsContent} />
      )}
    />
  );
};

export default About;
