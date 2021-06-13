import { Layout } from "@/components/Layout";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import { EmbeddedAssetBlockImageUi } from "@/components/Shared/RichtextUi/EmbeddedAsset";
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

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPostModel(slug: { eq: $slug }) {
      id
      title
      slug
      metaTitle
      metaDescription
      keywords
      author
      cover {
        file {
          url
        }
      }

      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`;

interface BlogPageProps extends PageProps {
  data: {
    contentfulBlogPostModel: {
      slug: string;
      title: string;
      body: {
        raw: any;
        references: any[];
      };
    };
  };
}

export default class BlogDetail extends Component<BlogPageProps> {
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
            references={this.props.data.contentfulBlogPostModel.body.references}
          />
        ),
        "embedded-asset-block": (node) => (
          <EmbeddedAssetBlockImageUi
            node={node}
            references={this.props.data.contentfulBlogPostModel.body.references}
          />
        ),
      },
    };
    return options;
  }

  render(): JSX.Element {
    console.log(this.props);
    const {
      data: {
        contentfulBlogPostModel: { body, title, slug },
      },
    } = this.props;
    return (
      <Layout>
        <Breadcrumb
          currentPageTitle={title}
          routes={[
            { path: "/", title: "Home" },
            { path: "/blog/", title: "Blogs" },
            { path: "/" + slug, title: slug },
          ]}
        />
        <div className="page-bottom pb-0">
          <div className="container">
            {documentToReactComponents(JSON.parse(body.raw), this.provideOptions())}
          </div>
        </div>
      </Layout>
    );
  }
}
