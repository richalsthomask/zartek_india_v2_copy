import { FAQType, ServiceModelType, StructuredDataSnippet } from "@/@types/types";
import { StructuredDataSnippetTag } from "@/components/Helpers/StructuredDataTag";
import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import { EmbeddedBlockUi } from "@/components/Shared/RichtextUi/EmbeddedBlockUi";
import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from "@/components/Shared/RichtextUi/Headings";
import { UnorderedListRT } from "@/components/Shared/RichtextUi/UnOrderedList";
import { FrequentlyAskedQuestions } from "@/components/Shared/Ui/FAQs";
import { ServiceInfoCard } from "@/components/Shared/Ui/ServiceInfoCard";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";
import { OtherServices } from "./OtherServices";

export const query = graphql`
  query GET_SERVICE_DETAIL($slug: String!) {
    contentfulServiceModel(slug: { eq: $slug }) {
      structuredDataSnippets {
        snippet {
          id
          snippet
        }
      }

      slug
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }
      breadcrumbTitle
      serviceCardTitle
      detailedPage {
        raw
        references {
          ... on ContentfulBulletPointsListRichTextEditorModel {
            __typename
            contentful_id
            id
            points {
              id
              title
              description {
                description
              }
            }
          }
          ... on ContentfulQuoteRtModel {
            contentful_id
            __typename
            id
            quote {
              quote
            }
            by
          }
        }
      }

      faq {
        faqItem {
          id
          question
          answer {
            answer
          }
        }
      }

      relatedServices {
        id
        slug
        serviceCardTitle
        serviceCardShortDescription
        serviceCardIcon {
          file {
            url
          }
        }
      }
    }
  }
`;

interface ServicesPageProps extends PageProps {
  data: {
    contentfulServiceModel: {
      structuredDataSnippets: StructuredDataSnippet[];
      seo: SEOType;
      slug: string;
      breadcrumbTitle?: string;
      serviceCardTitle: string;
      detailedPage: {
        raw: any;
        references: any[];
      };

      faq?: { faqItem: FAQType[] };
      relatedServices: ServiceModelType[];
    };
  };
}

export default class ServiceDetailTemplate extends Component<ServicesPageProps> {
  private provideOptions(): Options {
    const options: Options = {
      renderNode: {
        [BLOCKS.DOCUMENT]: (node, children) => <div>{children}</div>,
        [BLOCKS.HEADING_1]: (_, children) => <HeadingOne heading={children} />,
        [BLOCKS.HEADING_2]: (_, children) => <HeadingTwo heading={children} />,
        [BLOCKS.HEADING_3]: (_, children) => <HeadingThree heading={children} />,
        [BLOCKS.HEADING_4]: (_, children) => <HeadingFour heading={children} />,
        [BLOCKS.HEADING_5]: (_, children) => <HeadingFive heading={children} />,
        [BLOCKS.HEADING_6]: (_, children) => <HeadingSix heading={children} />,
        [BLOCKS.UL_LIST]: (_, children) => <UnorderedListRT list={children} />,

        "embedded-entry-block": (node) => (
          <EmbeddedBlockUi
            node={node}
            references={this.props.data.contentfulServiceModel.detailedPage.references}
          />
        ),
      },
    };
    return options;
  }

  render(): JSX.Element {
    const {
      data: {
        contentfulServiceModel: {
          detailedPage,
          serviceCardTitle,
          breadcrumbTitle,
          slug,
          seo,
          structuredDataSnippets,
          faq,
          relatedServices,
        },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <StructuredDataSnippetTag snippets={structuredDataSnippets} />
        <Breadcrumb
          currentPageTitle={breadcrumbTitle || serviceCardTitle}
          routes={[
            { path: "/", title: "Home" },
            { path: "/services/", title: "Services" },
            { path: "/" + slug, title: serviceCardTitle, baseUrlOff: true },
          ]}
        />
        <div className="page-bottom pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                {documentToReactComponents(JSON.parse(detailedPage.raw), this.provideOptions())}
              </div>
              <OtherServices />
            </div>
          </div>
          {
            /* {relatedServices} */
            relatedServices?.length ? (
              <div className="container pt-3 pb-3">
                <h3 className="text-center">More Services You Might Like </h3>
                <div className="row " style={{ marginTop: "70px" }}>
                  {relatedServices.map(
                    ({
                      serviceCardIcon,
                      serviceCardShortDescription,
                      serviceCardTitle,
                      slug,
                      id,
                    }) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                          <ServiceInfoCard
                            cardDescription={serviceCardShortDescription}
                            cardIcon={serviceCardIcon}
                            cardTitle={serviceCardTitle}
                            routerLink={"/" + slug}
                          />
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            ) : (
              ""
            )
          }
          {faq && <FrequentlyAskedQuestions faQs={faq.faqItem} />}
        </div>
      </Layout>
    );
  }
}
