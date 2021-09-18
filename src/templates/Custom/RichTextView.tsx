/* eslint-disable react/display-name */
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
import React, { FC } from "react";

export const query = graphql`
  query GET_RICH_TEXT_PAGE_DETAIL($slug: String!) {
    contentfulCustomPagesWithRichTextTemplate(slug: { eq: $slug }) {
      slug
      breadcrumbTitle
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }
      pageContent {
        raw
      }
    }
  }
`;

interface RichTextViewTemplateProps extends PageProps {
  data: {
    contentfulCustomPagesWithRichTextTemplate: {
      seo: SEOType;
      slug: string;
      breadcrumbTitle: string;
      pageContent: { raw: any };
    };
  };
}

const RichTextViewTemplate: FC<RichTextViewTemplateProps> = ({
  data: {
    contentfulCustomPagesWithRichTextTemplate: { seo, slug, breadcrumbTitle, pageContent },
  },
}) => {
  const provideOptions = () => {
    const options: Options = {
      renderNode: {
        // eslint-disable-next-line react/display-name
        [BLOCKS.DOCUMENT]: (_, children) => <div>{children}</div>,
        [BLOCKS.HEADING_1]: (_, children) => <HeadingOne heading={children} />,
        [BLOCKS.HEADING_2]: (_, children) => <HeadingTwo heading={children} />,
        [BLOCKS.HEADING_3]: (_, children) => <HeadingThree heading={children} />,
        [BLOCKS.HEADING_4]: (_, children) => <HeadingFour heading={children} />,
        [BLOCKS.HEADING_5]: (_, children) => <HeadingFive heading={children} />,
        [BLOCKS.HEADING_6]: (_, children) => <HeadingSix heading={children} />,
        [BLOCKS.UL_LIST]: (_, children) => <UnorderedListRT list={children} />,
      },
    };
    return options;
  };

  return (
    <Layout>
      <SEO contentfulSeo={seo} />
      <Breadcrumb
        currentPageTitle={breadcrumbTitle}
        routes={[
          { path: "/", title: "Home" },
          { path: "/" + slug, title: breadcrumbTitle, baseUrlOff: true },
        ]}
      />
      <div className="page-bottom pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {documentToReactComponents(JSON.parse(pageContent.raw), provideOptions())}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RichTextViewTemplate;
