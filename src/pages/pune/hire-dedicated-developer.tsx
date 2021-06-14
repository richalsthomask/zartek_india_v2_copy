import HireDevelopers from "@/components/HireDedicatedDevs";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";
const HireDedicatedDevelopers: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query HIRE_DEDICATED_DEVELOPERS_PUNE {
          contentfulHireDedicatedDevelopersPage(
            use: { eq: "Use This space to access Hire Dedicated Devs Page - Pune" }
          ) {
            title
            description {
              description
            }
          }
        }
      `}
      render={({ contentfulHireDedicatedDevelopersPage: { title, description } }) => (
        <HireDevelopers description={description} title={title} />
      )}
    />
  );
};

export default HireDedicatedDevelopers;
