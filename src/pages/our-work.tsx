import { Portfolio } from "@/components/Portfolio";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

const OurWork: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_OUR_WORK_KOCHI {
          contentfulOurWorkPage(use: { eq: "Use This space to access Our Work Page - Kochi" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            works {
              title
              id
              description
              links {
                websiteLink
                appStoreLink
                playStoreLink
              }

              icon {
                file {
                  url
                }
              }
              detailPage {
                slug
              }
            }
          }
        }
      `}
      render={({ contentfulOurWorkPage: { works, seo } }) => <Portfolio works={works} seo={seo} />}
    />
  );
};

export default OurWork;
