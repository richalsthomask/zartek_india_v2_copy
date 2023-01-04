import { graphql, StaticQuery } from "gatsby";
import React, { Fragment } from "react";
import { Layout } from "../Layout";
import SEO from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";

export default class Career extends React.Component<
  any,
  {
    isScriptadded: boolean;
  }
> {
  state = {
    isScriptadded: false,
  };

  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = "https://app.pyjamahr.com/asset-objects/careers-page-integration.js";

    script.onload = () => {
      this.setState({
        isScriptadded: true,
      });
    };
    document.body?.append(script);
  }

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
                <div style={{ height: "100vh" }}>
                  {this.state.isScriptadded ? (
                    <iframe
                      id="careers-page"
                      width="100%"
                      title="jobs"
                      height="100%"
                      src="https://app.pyjamahr.com/careers?company=Zartek Technologies&amp;company_uuid=4121BE33C7&amp;isHeaderVisible=false&amp;is_careers_page=true"
                    ></iframe>
                  ) : null}
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
