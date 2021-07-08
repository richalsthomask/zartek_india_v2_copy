import { TestimonialCardType } from "@/@types/types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { TestimonialCard } from "../Shared/Ui/TestimonialCard";

interface TestimonialsProps {
  testimonials: {
    testimonial: TestimonialCardType[];
  };
}

export default class Testimonials extends Component<TestimonialsProps> {
  render(): JSX.Element {
    const { testimonials } = this.props;

    console.log(testimonials);

    return (
      <Layout>
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
                <h3 className="text-center">Testimonials</h3>
                <div className="center-text">
                  <p>Read the feedback from our clients about our work performance</p>
                </div>
              </div>
            </div>
            <div className="row mb-4 row-eq-height">
              {testimonials.testimonial.map(
                ({ feedback, id, profilePic, userDesignation, userName }) => {
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
                },
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
