import { Portfolio } from "@/components/Portfolio";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const OurWork: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_OUR_WORK_PUNE {
          contentfulOurWorkPage(use: { eq: "Use This space to access Our Work Page - Pune" }) {
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
            }
          }
        }
      `}
      render={({ contentfulOurWorkPage: { works } }) => <Portfolio works={works} />}
    />
  );
};

export default OurWork;
