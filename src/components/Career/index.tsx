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
              <div className="page-bottom pbottom-70">
                <div className="container pt-3">
                  <iframe
                    src="https://zartek.kekahire.com/api/embedjobs/a8fa4f07-15d0-4f59-a265-5d701fae059d"
                    title="zartek careers"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    style={{ minHeight: "100vh" }}
                  ></iframe>
                </div>
              </div>
            </Fragment>
          )}
        />
      </Layout>
    );
  }
}
