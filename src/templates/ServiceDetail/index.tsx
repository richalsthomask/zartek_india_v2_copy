import {
  BulletPointsWithImageType,
  FAQType,
  MoreSolutionWeOffer,
  ParallaxStatPodType,
  ServiceAreaModelType,
  WelcomeAreaPropType,
} from "@/@types/types";
import { Stats } from "@/components/App/Stats";
import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import { FrequentlyAskedQuestions } from "@/components/Shared/Ui/FAQs";
import { Features } from "@/components/Shared/Ui/Features";
import { ServicesOffered } from "@/components/Shared/Ui/ServicesOffered";
import { WelcomeArea } from "@/components/Shared/Ui/WelcomeArea";
import { graphql, PageProps } from "gatsby";
import React from "react";
import SolutionsWeAlsoOffer from "../SolutionDetail/MoreSolutionWeOffer";

export const query = graphql`
  query GET_SERVICE_DETAIL($slug: String!) {
    contentfulServiceDataModel(slug: { eq: $slug }) {
      slug
      serviceTitle
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

        #Sub solutions
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

        #Company Stats

        statsContainer {
          id
          title
          description {
            description
          }
        }

        #FAQS

        faQs {
          id
          question
          answer {
            answer
          }
        }
        # Footer Content
        footerContent {
          raw
        }
      }
    }
  }
`;

interface ServiceDetailProps extends PageProps {
  data: {
    contentfulServiceDataModel: {
      slug: string;
      serviceTitle: string;
      detailedPage: {
        seo: SEOType;
        welcomeArea: WelcomeAreaPropType;
        solutionArea: ServiceAreaModelType;
        featureArea: BulletPointsWithImageType;
        moreSultionsWeOffer: MoreSolutionWeOffer;
        statsContainer?: ParallaxStatPodType[];
        faQs?: FAQType[];
        footerContent?: { raw: any };
      };
    };
  };
}

export default class ServiceDetail extends React.Component<ServiceDetailProps> {
  render(): JSX.Element {
    const {
      data: {
        contentfulServiceDataModel: {
          detailedPage: {
            welcomeArea,
            solutionArea,
            featureArea,
            seo,
            faQs,
            statsContainer,
            footerContent,
            moreSultionsWeOffer,
          },
        },
      },
    } = this.props;

    return (
      <Layout footerContent={footerContent?.raw}>
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
