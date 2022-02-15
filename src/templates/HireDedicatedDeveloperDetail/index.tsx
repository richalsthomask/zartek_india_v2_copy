import { FAQType } from "@/@types/types";
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
  query GET_HIRE_DEDICATED_DEV_DETAIL_PAGE($slug: String!) {
    contentfulHireDedicatedDeveloperModel(slug: { eq: $slug }) {
      title
      slug
      detailedPage {
        seo {
          metaTitle
          metaDescription
          metaUrl
          metaAuthor
          metaKeywords
        }
        breadcrumbTitle

        content {
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
  }
`;

interface HireDedicatedDeveloperDetailProps extends PageProps {
  data: {
    contentfulHireDedicatedDeveloperModel: {
      title: string;
      slug: string;
      detailedPage: {
        breadcrumbTitle?: string;
        seo: SEOType;
        content: {
          raw: any;
        };
        frequentlyAskedQuestions: FAQType[];
      };
    };
  };
}

export default class HireDedicatedDeveloperDetail extends Component<HireDedicatedDeveloperDetailProps> {
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

        "embedded-entry-block": (node) => <EmbeddedBlockUi node={node} references={[]} />,
      },
    };
    return options;
  }

  render(): JSX.Element {
    const {
      data: {
        contentfulHireDedicatedDeveloperModel: {
          title,
          slug,
          detailedPage: { seo, breadcrumbTitle, content, frequentlyAskedQuestions },
        },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle={breadcrumbTitle || title}
          routes={[
            { path: "/", title: "Home" },
            { path: "/hire-dedicated-developer/", title: "Hire dedicated developers" },
            { path: "/" + slug, title: title },
          ]}
        />
        <div className="page-bottom pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {documentToReactComponents(JSON.parse(content.raw), this.provideOptions())}
              </div>
            </div>
          </div>
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
