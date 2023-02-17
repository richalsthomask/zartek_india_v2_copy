import GetStarted from "@/components/HireDedicatedDevs/get-started";
import HowToHire from "@/components/HireDedicatedDevs/how-to";
import HireDedicatedDevelopersServices from "@/components/HireDedicatedDevs/services";
import Testimonials from "@/components/HireDedicatedDevs/testimonials";
import { Layout } from "@/components/Layout";
import SEO, { SEOType } from "@/components/SEO";
import AllClientsList from "@/components/Shared/AllClients";
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
import TopClients from "@/components/Shared/TopClients";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Advantages from "./advantages";

export const query = graphql`
  query GET_HIRE_DEDICATED_DEV_DETAIL_PAGE($slug: String!) {
    contentfulHireDedicatedDeveloperModel(slug: { eq: $slug }) {
      seo {
        metaTitle
        metaDescription
        metaUrl
        metaAuthor
        metaKeywords
      }
      slug
      cardTitle
      breadcrumbTitle
      advantagesTitle
      advantages {
        id
        icon {
          file {
            url
          }
        }
        title
      }

      contentSection {
        title
        position
        image {
          file {
            url
          }
        }
        content {
          content
        }
        learnMoreLink
      }

      testimonials {
        id
        userName
        userDesignation
        profilePic {
          file {
            url
          }
        }
        feedback {
          feedback
        }
        rating
      }
    }
  }
`;

interface HireDedicatedDeveloperDetailProps extends PageProps {
  data: {
    contentfulHireDedicatedDeveloperModel: {
      slug: string;
      seo: SEOType;
      breadcrumbTitle: string;
      cardTitle: string;
      advantagesTitle: string;
      advantages: any[];
      contentSection: any[];
      testimonials: any[];
    };
  };
}

export default class HireDedicatedDeveloperDetail extends React.Component<HireDedicatedDeveloperDetailProps> {
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
          seo,
          slug,
          breadcrumbTitle,
          cardTitle,
          advantagesTitle,
          advantages,
          contentSection,
          testimonials,
        },
      },
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle={breadcrumbTitle || cardTitle}
          routes={[
            { path: "/", title: "Home" },
            { path: "/hire-dedicated-developer/", title: "Hire dedicated developers" },
            { path: "/" + slug, title: cardTitle },
          ]}
        />
        <TopClients />
        <div id="flutter-development">
          <div className="container my-5">
            <div className="col-12">
              <h3 className="text-center">
                Let’s take you to the advantages of <br /> <span>{advantagesTitle}</span>
              </h3>
            </div>
            <Advantages data={advantages} />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="d-grid gap-2 col-xl-3 col-lg-5 col-sm-6 col-8 mx-auto">
              <Link to="/contact/">
                <button
                  className="btn btn-primary button-blue button-light-blue py-3 px-5 rounded-5"
                  style={{ borderRadius: "2rem" }}
                >
                  Hire Developers
                </button>
              </Link>
            </div>
          </div>
        </div>
        {contentSection.map((section, idx) => {
          return <HireDedicatedDevelopersServices data={section} key={idx} />;
        })}

        <Testimonials list={testimonials} title="What Our Happy Clients Says" />

        <HowToHire />
        <GetStarted />
        <AllClientsList />
      </Layout>
    );
  }
}
