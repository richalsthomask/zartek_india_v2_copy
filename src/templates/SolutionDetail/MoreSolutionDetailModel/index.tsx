import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from "@/components/Shared/RichtextUi/Headings";
import { UnorderedListRT } from "@/components/Shared/RichtextUi/UnOrderedList";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";

export const query = graphql`
  query GET_MORE_SULTION_DETAIL($slug: String!) {
    contentfulSubSolutionModel(slug: { eq: $slug }) {
      title
      slug
      detailPage {
        breadCrumbTitle
        seo {
          metaTitle
          metaDescription
          metaUrl
          metaAuthor
          metaKeywords
        }
        content {
          raw
        }
      }
    }
  }
`;

interface MoreSultionPageProps extends PageProps {
  data: {
    contentfulSubSolutionModel: {
      title: string;
      slug: string;
      detailPage: {
        seo: SEOType;
        breadCrumbTitle?: string;
        content: {
          raw: any;
          // references: any[];
        };
      };
    };
  };
}

export default class ServiceDetailTemplate extends Component<MoreSultionPageProps> {
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

        // "embedded-entry-block": (node) => (
        //   <EmbeddedBlockUi
        //     node={node}
        //     references={this.props.data.contentfulSubSolutionModel.detailPage.references}
        //   />
        // ),
      },
    };
    return options;
  }

  render(): JSX.Element {
    const {
      data: {
        contentfulSubSolutionModel: {
          slug,
          title,
          detailPage: { content, seo, breadCrumbTitle },
        },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle={breadCrumbTitle || title}
          routes={[
            { path: "/", title: "Home" },
            { path: "/solutions/", title: "Solutions" },
            { path: "/" + slug, title: title, baseUrlOff: true },
          ]}
        />
        <div className="page-bottom pb-0 pt-5">
          <div className="container">
            {documentToReactComponents(JSON.parse(content.raw), this.provideOptions())}
          </div>
        </div>
      </Layout>
    );
  }
}
