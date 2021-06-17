import SolutionPage from "@/components/Solutions";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Solutions: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SOLUTIONS_LIST_PUNE {
          contentfulSolutionsPage(use: { eq: "Use This space to access Solutions Page - Pune" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
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
          seo,
        },
      }) => <SolutionPage solutions={solutions} seo={seo} />}
    />
  );
};

export default Solutions;
