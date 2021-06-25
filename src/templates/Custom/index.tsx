import {
  BulletPointsWithImageType,
  FAQType,
  ParallaxStatPodType,
  ServiceAreaModelType,
  StructuredDataSnippet,
  TestimonialType,
  WelcomeAreaPropType,
} from "@/@types/types";
import HomePage from "@/components/App";
import { SEOType } from "@/components/SEO";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";

export const query = graphql`
  query GET_CUSTOM_PAGE_DETAIL($slug: String!) {
    contentfulHomePageUiModel(slug: { eq: $slug }) {
      #
      structuredDataSnippets {
        snippet {
          id
          snippet
        }
      }

      # SEO
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }

      #     Welcome banner
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

      #     Top Services

      serviceArea {
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

      #     Features Offered

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
      #     Testimonials

      testimonials {
        id
        reviewerName
        reviewerRole
        reviewerProfilePic {
          file {
            url
          }
        }
        review
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

      footerContent {
        raw
      }
    }
  }
`;

interface CustomPageProps extends PageProps {
  data: {
    contentfulHomePageUiModel: {
      seo: SEOType;
      welcomeArea: WelcomeAreaPropType;
      serviceArea: ServiceAreaModelType;
      featureArea: BulletPointsWithImageType;
      testimonials: TestimonialType[];
      statsContainer: ParallaxStatPodType[];
      faQs: FAQType[];
      structuredDataSnippets?: StructuredDataSnippet[];
      footerContent?: { raw: any };
    };
  };
}

export default class CustomePage extends Component<CustomPageProps> {
  render(): JSX.Element {
    return <HomePage contentfulHomePage={this.props.data.contentfulHomePageUiModel} />;
  }
}
