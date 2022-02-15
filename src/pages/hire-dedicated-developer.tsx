import HireDevelopers from "@/components/HireDedicatedDevs";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const HireDedicatedDevelopers: FC = () => {
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
            title
            description {
              description
            }

            types {
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
      `}
      render={({ contentfulHireDedicatedDevelopersPage: { title, description, types, seo } }) => (
        <HireDevelopers description={description} title={title} pods={types} seo={seo} />
      )}
    />
  );
};

export default HireDedicatedDevelopers;
