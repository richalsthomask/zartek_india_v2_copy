import {
  BulletPointsWithImageType,
  FAQType,
  MoreSolutionWeOffer,
  ParallaxStatPodType,
  ServiceAreaModelType,
  StructuredDataSnippet,
  WelcomeAreaPropType,
} from "@/@types/types";
import { Stats } from "@/components/App/Stats";
import { StructuredDataSnippetTag } from "@/components/Helpers/StructuredDataTag";
import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import { FrequentlyAskedQuestions } from "@/components/Shared/Ui/FAQs";
import { Features } from "@/components/Shared/Ui/Features";
import { ServicesOffered } from "@/components/Shared/Ui/ServicesOffered";
import { WelcomeArea } from "@/components/Shared/Ui/WelcomeArea";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SolutionsWeAlsoOffer from "./MoreSolutionWeOffer";

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
        moreSultionsWeOffer {
          title
          description
          solutions {
            id
            slug
            title
            shortDescription
            coverImage {
              file {
                url
              }
            }
          }
        }
        statsContainer {
          id
          title
          description {
            description
          }
        }
        faQs {
          id
          question
          answer {
            answer
          }
        }
        footerContent {
          raw
        }
        structuredDataSnippets {
          snippet {
            id
            snippet
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
        moreSultionsWeOffer: MoreSolutionWeOffer;
        statsContainer?: ParallaxStatPodType[];
        faQs?: FAQType[];
        footerContent?: { raw: any };
        structuredDataSnippets: StructuredDataSnippet[];
      };
    };
  };
}

export default class SolutionDetail extends React.Component<SolutionDetailProps> {
  render(): JSX.Element {
    const {
      data: {
        contentfulSolutionModel: {
          detailedPage: {
            welcomeArea,
            solutionArea,
            featureArea,
            seo,
            faQs,
            statsContainer,
            footerContent,
            moreSultionsWeOffer,
            structuredDataSnippets,
          },
        },
      },
    } = this.props;

    return (
      <Layout footerContent={footerContent?.raw}>
        <StructuredDataSnippetTag snippets={structuredDataSnippets} />
        <SEO contentfulSeo={seo} />
        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={solutionArea} btnName={"Contact Us"} />
        <Features features={featureArea} />
        {statsContainer ? <Stats stats={statsContainer} /> : ""}
        {moreSultionsWeOffer ? <SolutionsWeAlsoOffer data={moreSultionsWeOffer} /> : ""}

        {faQs ? <FrequentlyAskedQuestions faQs={faQs} /> : ""}
      </Layout>
    );
  }
}
