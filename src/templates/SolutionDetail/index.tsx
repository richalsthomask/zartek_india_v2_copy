import {
  BulletPointsWithImageType,
  ServiceAreaModelType,
  WelcomeAreaPropType,
} from "@/@types/types";
import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import { Features } from "@/components/Shared/Ui/Features";
import { ServicesOffered } from "@/components/Shared/Ui/ServicesOffered";
import { WelcomeArea } from "@/components/Shared/Ui/WelcomeArea";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";

export const query = graphql`
  query GET_SOLUTION_DETAIL($slug: String!) {
    contentfulSolutionModel(slug: { eq: $slug }) {
      slug
      solutionTitle
      detailedPage {
        seo {
          metaTitle
          metaDescription
          metaUrl
          metaAuthor
          metaKeywords
        }

        welcomeArea {
          backgroundImage {
            file {
              url
            }
          }
          title
          description {
            description
          }

          option1 {
            title
            link
          }

          option2 {
            title
            link
          }

          applets {
            id
            appTitle
            redirectLink
            appIcon {
              file {
                url
              }
            }
          }
        }

        solutionArea {
          title
          description {
            description
          }

          services {
            id
            title
            description
            icon {
              file {
                url
              }
            }
            routerLink
          }
        }

        featureArea {
          position
          image {
            file {
              url
            }
          }

          points {
            id
            title
            description {
              description
            }
          }
        }
      }
    }
  }
`;

interface SolutionDetailProps extends PageProps {
  data: {
    contentfulSolutionModel: {
      slug: string;
      solutionTitle: string;
      detailedPage: {
        seo: SEOType;
        welcomeArea: WelcomeAreaPropType;
        solutionArea: ServiceAreaModelType;
        featureArea: BulletPointsWithImageType;
      };
    };
  };
}

export default class SolutionDetail extends Component<SolutionDetailProps> {
  render(): JSX.Element {
    const {
      data: {
        contentfulSolutionModel: {
          detailedPage: { welcomeArea, solutionArea, featureArea, seo },
        },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={solutionArea} btnName={"Contact Us"} />
        <Features features={featureArea} />
      </Layout>
    );
  }
}
