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
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, PageProps } from "gatsby";
import React, { Component } from "react";
import { OtherServices } from "./OtherServices";

export const query = graphql`
  query GET_SERVICE_DETAIL($slug: String!) {
    contentfulServiceModel(slug: { eq: $slug }) {
      slug
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }
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
        }
      }
    }
  }
`;

interface ServicesPageProps extends PageProps {
  data: {
    contentfulServiceModel: {
      seo: SEOType;
      slug: string;
      serviceCardTitle: string;
      detailedPage: {
        raw: any;
        references: any[];
      };
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
        contentfulServiceModel: { detailedPage, serviceCardTitle, slug, seo },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle={serviceCardTitle}
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
        </div>
      </Layout>
    );
  }
}
