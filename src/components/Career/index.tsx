import { graphql, StaticQuery } from "gatsby";
import React, { Fragment } from "react";
import { Layout } from "../Layout";
import SEO from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";

export default class Career extends React.Component {
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
              <div className="pb-5">
                <div className="pt-3 ">
                  <iframe
                    src="https://recruitcareers.zappyhire.com/en/zartek"
                    title="zartek careers"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    style={{ minHeight: "100vh" }}
                  ></iframe>
                </div>

                <div className="container mt-3">
                  <strong>Note</strong> : Zartek or any employee will never ask any candidate
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
