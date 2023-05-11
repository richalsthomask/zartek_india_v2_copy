import { PortfolioDetailEntity } from "@/@types/types";
import { LazyImage } from "@/components/Helpers/LazyImage";
import { Layout } from "@/components/Layout";
import SEO from "@/components/SEO";
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
import { UnorderedListRT } from "@/components/Shared/RichtextUi/UnOrderedList";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { PageProps, graphql } from "gatsby";
import React from "react";

export const query = graphql`
  query PortfolioDetailQuery($slug: String!) {
    contentfulOursWorks(detailPage: { slug: { eq: $slug } }) {
      deliverables
      icon {
        file {
          url
        }
      }
      title
      links {
        websiteLink
        appStoreLink
        playStoreLink
      }

      detailPage {
        seo {
          metaTitle
          metaDescription
          metaUrl
          metaAuthor
          metaKeywords
        }
        releasedDate
        content {
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
        client {
          client
        }
        team {
          team
        }
        services {
          services
        }
      }
    }
  }
`;

interface PortfolioProps extends PageProps {
  data: {
    contentfulOursWorks: PortfolioDetailEntity;
  };
}

const PortfolioDetailPage: React.FC<PortfolioProps> = ({ data, path }) => {
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
          references={data.contentfulOursWorks.detailPage.content.references}
        />
      ),
      "embedded-asset-block": (node) => (
        <EmbeddedAssetBlockImageUi
          node={node}
          references={data.contentfulOursWorks.detailPage.content.references}
        />
      ),
    },
  };

  return (
    <Layout>
      <SEO contentfulSeo={data.contentfulOursWorks.detailPage.seo} />

      <Breadcrumb
        currentPageTitle={data.contentfulOursWorks.title}
        routes={[
          { path: "/", title: "Home" },
          { path: "/our-work/", title: "Portfolio" },
          { path: path, title: data.contentfulOursWorks.title },
        ]}
      />

      <div id="portfolio-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-3">
              <div className="name-logo-section mt-3">
                <img
                  src={data.contentfulOursWorks.icon.file.url}
                  alt="..."
                  className="img-fluid logo"
                />
                <h3 className="mb-0">{data.contentfulOursWorks.title}</h3>
                <p>{data.contentfulOursWorks.deliverables}</p>
                <div className="d-flex justify-content-start app-links mt-3">
                  {data.contentfulOursWorks.links?.appStoreLink && (
                    <a
                      href={data.contentfulOursWorks.links?.appStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                    >
                      <LazyImage height={24} width={24} src={"/images/app-store.png"} alt="store" />
                    </a>
                  )}
                  {data.contentfulOursWorks.links?.playStoreLink && (
                    <a
                      href={data.contentfulOursWorks.links?.playStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                    >
                      <LazyImage height={24} width={24} src={"/images/playstore.png"} alt="store" />
                    </a>
                  )}
                  {data.contentfulOursWorks.links?.websiteLink && (
                    <a
                      href={data.contentfulOursWorks.links?.websiteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                    >
                      <LazyImage height={24} width={24} src={"/images/web.png"} alt="store" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-sm-9 mt-5" id="work-details">
              <div className="row">
                <div className="col-6">
                  <h5>Client</h5>
                  <h6 style={{ whiteSpace: "pre" }}>
                    {data.contentfulOursWorks.detailPage.client.client}
                  </h6>
                </div>
                <div className="col-6">
                  <h5>Team</h5>
                  <h6 style={{ whiteSpace: "pre" }}>
                    {data.contentfulOursWorks.detailPage.team.team}
                  </h6>
                </div>
                <div className="col-6">
                  <h5>Services</h5>
                  <h6 style={{ whiteSpace: "pre" }}>
                    {data.contentfulOursWorks.detailPage.services.services}
                  </h6>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <h6 style={{ whiteSpace: "pre" }}>
                    {new Date(data.contentfulOursWorks.detailPage.releasedDate).toLocaleDateString(
                      "en",
                      { month: "long", day: "2-digit", year: "numeric" },
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="page-bottom pb-0 pt-5">
            <div className="container">
              {documentToReactComponents(
                JSON.parse(data.contentfulOursWorks.detailPage.content.raw),
                options,
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDetailPage;
