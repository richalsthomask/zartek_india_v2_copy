import {
  BulletPointsWithImageType,
  FAQType,
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
import { PageProps, graphql } from "gatsby";
import React from "react";

export const query = graphql`
  query GET_Dedicated_Devs_DETAIL($slug: String!) {
    contentfulHireDedicatedDeveloperModel(slug: { eq: $slug }) {
      slug
      detailPage {
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

interface DedicatedDevsDetailProps extends PageProps {
  data: {
    contentfulHireDedicatedDeveloperModel: {
      slug: string;
      detailPage: {
        seo: SEOType;
        welcomeArea: WelcomeAreaPropType;
        solutionArea: ServiceAreaModelType;
        featureArea: BulletPointsWithImageType;
        statsContainer?: ParallaxStatPodType[];
        faQs?: FAQType[];
        footerContent?: { raw: any };
        structuredDataSnippets: StructuredDataSnippet[];
      };
    };
  };
}

export default class DedicatedDevsDetail extends React.Component<DedicatedDevsDetailProps> {
  render(): JSX.Element {
    const {
      data: {
        contentfulHireDedicatedDeveloperModel: {
          detailPage: {
            welcomeArea,
            solutionArea,
            featureArea,
            seo,
            faQs,
            statsContainer,
            footerContent,
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

        {faQs ? <FrequentlyAskedQuestions faQs={faQs} /> : ""}
      </Layout>
    );
  }
}
