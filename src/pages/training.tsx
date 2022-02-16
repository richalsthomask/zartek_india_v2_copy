import TrainingList from "@/components/Training";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Training: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_Training_LIST_KOCHI {
          contentfulTrainingPage(use: { eq: "Use this space to manage training page" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            list {
              id
              slug
              trainingCardTitle
              trainingCardShortDescription
              trainingCardIcon {
                file {
                  url
                }
              }
            }
          }
        }
      `}
      render={({ contentfulTrainingPage: { list, seo } }) => <TrainingList list={list} seo={seo} />}
    />
  );
};

export default Training;
