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
          currentPageTitle="Flutter Training"
          routes={[
            { path: "/", title: "Home" },
            { path: "/flutter-course-kochi/", title: "Flutter Training" },
          ]}
        />
        <StaticQuery
          query={graphql`
            query {
              contentfulSeo(page: { eq: "Flutter Training" }) {
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
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="center-heading">
                        <h2 className="section-title">Flutter Training in Kochi, Kerala, India</h2>
                      </div>
                      <p>
                        Zartek is providing 2 months intense training class in Flutter, a hybrid app
                        development kit from Google that helps to build Android and iOS helps in
                        short timeline and with higher efficiency. The classes will be taken by our
                        lead developers and each student will complete live application in iOS and
                        Android at the end of the course session. The students will be learning
                        along with our team and will be given exposure to live projects as a part of
                        the course.
                        <a
                          href="https://gocollabo.typeform.com/to/pwbnrx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Enroll Now
                        </a>
                      </p>

                      <div className="center-heading">
                        <h2 style={{ textAlign: "left" }} className="section-title">
                          Why You Should Learn Flutter in {new Date().getFullYear().toString()}
                        </h2>
                      </div>
                      <p>
                        For developers, it adds good value to your career profile (LinkedIn in
                        claims flutter is one of the fastest growing skills among software
                        engineers). It makes your development time much faster and extends your
                        capabilities to multi-platforms. It gives you an advantage while hiring
                        since many software companies these days are switching their front end tech
                        stack to flutter.
                      </p>
                      <p>
                        Zartek is the leading software company in Kochi, Kerala, India which has
                        specialised in Flutter and has produced mutliple products in Flutter. We are
                        using our expertise in the language to train and empower students and
                        upcoming developers. Flutter training in Kochi, Kerala will be for a
                        duration of 2 months and will be charged INR 20,000 per student.
                      </p>
                      <div className="center-heading">
                        <h2 style={{ textAlign: "left" }} className="section-title">
                          Why You Should Learn Flutter in {new Date().getFullYear().toString()}
                        </h2>
                      </div>
                      <p>
                        For developers, it adds good value to your career profile (LinkedIn in
                        claims flutter is one of the fastest growing skills among software
                        engineers). It makes your development time much faster and extends your
                        capabilities to multi-platforms. It gives you an advantage while hiring
                        since many software companies these days are switching their front end tech
                        stack to flutter.
                      </p>
                      <p>
                        Zartek is the leading software company in Kochi, Kerala, India which has
                        specialised in Flutter and has produced mutliple products in Flutter. We are
                        using our expertise in the language to train and empower students and
                        upcoming developers. Flutter training in Kochi, Kerala will be for a
                        duration of 2 months and will be charged INR 20,000 per student.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="typeform-widget"
                data-url="https://gocollabo.typeform.com/to/pwbnrx"
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
                      src="https://gocollabo.typeform.com/to/pwbnrx?typeform-medium=embed-snippet"
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
