import { OurWorkType } from "@/@types/types";
import React from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { ProductCard } from "../Shared/Ui/ProductCard";

interface PortfolioProps {
  works: OurWorkType[];
  seo: SEOType;
}

export class Portfolio extends React.Component<PortfolioProps> {
  render(): JSX.Element {
    const { works, seo } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle="Portfolio"
          routes={[
            { path: "/", title: "Home" },
            { path: "/our-work/", title: "Our Work" },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row" id="portfolio-content">
              {works.map(({ id, description, links, title, icon, detailPage }) => {
                return (
                  <ProductCard
                    imageSrc={icon.file.url}
                    productDescription={description}
                    productTitle={title}
                    key={id}
                    links={{
                      androidLink: links.playStoreLink,
                      websiteLink: links.websiteLink,
                      iosLink: links.appStoreLink,
                    }}
                    slug={detailPage?.slug || ""}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
