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

                <div className="container mt-3">
                  <strong>Note</strong> : Zartek or any or employee will never ask any candidate
                  favours, gifts, money. If you come across any suspicious behaviour, please send a
                  mail to info@zartek.in. Please ignore job advertisements of a dubious nature. Do
                  not share personal information, including OTPs sent to your mobile phone. Never
                  transfer money to strangers or anyone you have never met.
                </div>
              </div>
            </Fragment>
          )}
        />
      </Layout>
    );
  }
}
