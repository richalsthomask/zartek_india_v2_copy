import { FAQType, StructuredDataSnippet } from "@/@types/types";
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
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";

export const query = graphql`
  query GET_Training_DETAIL($slug: String!) {
    contentfulTrainingModel(slug: { eq: $slug }) {
      slug
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }
      breadcrumbTitle
      trainingCardTitle
      typeformLink
      detailedPage {
        raw
      }

      frequentlyAskedQuestions {
        id
        question
        answer {
          answer
        }
      }
    }
  }
`;

interface TrainingPageProps extends PageProps {
  data: {
    contentfulTrainingModel: {
      structuredDataSnippets: StructuredDataSnippet[];
      seo: SEOType;
      slug: string;
      breadcrumbTitle?: string;
      trainingCardTitle: string;
      typeformLink?: string;
      detailedPage: {
        raw: any;
        references: any[];
      };

      frequentlyAskedQuestions: FAQType[];
    };
  };
}

export default class TrainingDetailTemplate extends Component<TrainingPageProps> {
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
            references={this.props.data.contentfulTrainingModel.detailedPage?.references}
          />
        ),
      },
    };
    return options;
  }

  render(): JSX.Element {
    const {
      data: {
        contentfulTrainingModel: {
          detailedPage,
          breadcrumbTitle,
          slug,
          seo,
          structuredDataSnippets,
          frequentlyAskedQuestions,
          trainingCardTitle,
          typeformLink,
        },
      },
    } = this.props;

    console.log(typeformLink);

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <StructuredDataSnippetTag snippets={structuredDataSnippets} />
        <Breadcrumb
          currentPageTitle={breadcrumbTitle || trainingCardTitle}
          routes={[
            { path: "/", title: "Home" },
            { path: "/training/", title: "Training" },
            { path: "/" + slug, title: trainingCardTitle, baseUrlOff: true },
          ]}
        />
        <div className="page-bottom pb-0">
          <div className="container">
            {documentToReactComponents(JSON.parse(detailedPage.raw), this.provideOptions())}
          </div>

          {typeformLink ? (
            <div
              className="typeform-widget"
              data-transparency="100"
              data-hide-headers="true"
              data-hide-footer="true"
              style={{ width: "100%", height: "515px" }}
            >
              <div className="widget__WidgetWrapper-sc-1rxjz1n-0 NwqzB">
                <div className="widget__IframeWrapper-sc-1rxjz1n-2 cKLpKc">
                  <iframe
                    frameBorder="0"
                    height="100%"
                    src={typeformLink}
                    width="100%"
                    allow="camera; microphone; autoplay; encrypted-media;"
                    data-qa="iframe"
                    title="typeform-embed"
                    style={{ border: "0px", minHeight: "515px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {frequentlyAskedQuestions?.length ? (
            <FrequentlyAskedQuestions faQs={frequentlyAskedQuestions} />
          ) : (
            ""
          )}
        </div>
      </Layout>
    );
  }
}
