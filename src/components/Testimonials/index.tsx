import { TestimonialCardType } from "@/@types/types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { TestimonialCard } from "../Shared/Ui/TestimonialCard";

interface TestimonialsProps {
  testimonials: TestimonialCardType[];
  seo: SEOType;
}

export default class Testimonials extends Component<TestimonialsProps> {
  render(): JSX.Element {
    const { testimonials } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={this.props.seo} />
        <Breadcrumb
          currentPageTitle="Testimonials"
          routes={[
            { path: "/", title: "Home", baseUrlOff: true },
            { path: "/testimonials/", title: "Testimonials", baseUrlOff: true },
          ]}
        />
        <div className="page-bottom pb-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2 className="text-center">Testimonials</h2>
                <div className="center-text">
                  <p>Read the feedback from our clients about our work performance</p>
                </div>
              </div>
            </div>
            <div className="row mb-4 row-eq-height">
              {testimonials?.map(({ feedback, id, profilePic, userDesignation, userName }) => {
                return (
                  <TestimonialCard
                    feedback={feedback}
                    id={id}
                    key={id}
                    profilePic={profilePic}
                    userDesignation={userDesignation}
                    userName={userName}
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
