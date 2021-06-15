import HireDevelopers from "@/components/HireDedicatedDevs";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const HireDedicatedDevelopers: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query HIRE_DEDICATED_DEVELOPERS_HYDERABAD {
          contentfulHireDedicatedDevelopersPage(
            use: { eq: "Use This space to access Hire Dedicated Devs Page - Hyderabad" }
          ) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            title
            description {
              description
            }
            list {
              pods {
                id
                title
                description
                slug
                icon {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({
        contentfulHireDedicatedDevelopersPage: {
          title,
          description,
          list: { pods },
          seo,
        },
      }) => <HireDevelopers description={description} title={title} pods={pods} seo={seo} />}
    />
  );
};
export default HireDedicatedDevelopers;
