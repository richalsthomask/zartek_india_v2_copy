import SolutionPage from "@/components/Solutions";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Solutions: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SOLUTIONS_LIST_KOCHI {
          contentfulSolutionsPage(use: { eq: "Use This space to access Solutions Page - Kochi" }) {
            solutions {
              solutions {
                id
                solutionTitle
                solutionDescription
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
        contentfulSolutionsPage: {
          solutions: { solutions },
        },
      }) => <SolutionPage solutions={solutions} />}
    />
  );
};

export default Solutions;
