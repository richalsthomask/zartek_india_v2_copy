import { graphql, StaticQuery } from "gatsby";
import React, { Component, Fragment } from "react";
import { Layout } from "../Layout";
import SEO from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";

export default class Career extends Component {
  render(): JSX.Element {
    return (
      <Layout>
        <Breadcrumb
          currentPageTitle="Careers"
          routes={[
            { path: "/", title: "Home" },
            { path: "/careers/", title: "Careers" },
          ]}
        />
        <StaticQuery
          query={graphql`
            query {
              contentfulSeo(page: { eq: "Careers" }) {
                metaTitle
                metaDescription
                metaUrl
                metaAuthor
                metaKeywords
              }
            }
          `}
          render={({ contentfulSeo }) => (
            <Fragment>
              <SEO contentfulSeo={contentfulSeo} />
              <div
                className="typeform-widget"
                data-url="https://form.typeform.com/to/dK0O5FbP"
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
                      src="https://form.typeform.com/to/dK0O5FbP?typeform-medium=embed-snippet"
                      width="100%"
                      allow="camera; microphone; autoplay; encrypted-media;"
                      data-qa="iframe"
                      title="typeform-embed"
                      style={{ border: "0px", minHeight: "515px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        />
      </Layout>
    );
  }
}
