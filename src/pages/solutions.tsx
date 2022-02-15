import SolutionPage from "@/components/Solutions";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Solutions: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SOLUTIONS_LIST_KOCHI {
          contentfulSolutionsPage(use: { eq: "Use This space to access Solutions Page - Kochi" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }

            list {
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
      `}
      render={({ contentfulSolutionsPage: { list, seo } }) => (
        <SolutionPage solutions={list} seo={seo} />
      )}
    />
  );
};

export default Solutions;
