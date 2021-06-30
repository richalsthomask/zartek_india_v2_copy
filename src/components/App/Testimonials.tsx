import { TestimonialType } from "@/@types/types";
import React, { FC } from "react";
import { ClutchPromo } from "../Helpers/ClutchPromo";
import { TestimonialPod } from "../Shared/Ui/TestimonialPod";

export const Testimonials: FC<{ testimonials: TestimonialType[] }> = ({ testimonials }) => {
  return (
    <section className="section pbottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <ClutchPromo />
              <h3 className="section-title">Testimonials</h3>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Read the feedback from our clients about our work performance</p>
            </div>
          </div>
        </div>
        <div className="row">
          {testimonials.map(({ review, reviewerName, reviewerProfilePic, reviewerRole, id }) => {
            return (
              <TestimonialPod
                key={id}
                review={review}
                reviewerName={reviewerName}
                reviewerProfilePic={reviewerProfilePic}
                reviewerRole={reviewerRole}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
