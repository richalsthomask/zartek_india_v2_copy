import { TestimonialCardType } from "@/@types/types";
import React, { FC } from "react";

type TestimonialCardProps = TestimonialCardType;

export const TestimonialCard: FC<TestimonialCardProps> = ({
  feedback,
  profilePic,
  userDesignation,
  userName,
}) => {
  return (
    <div className="zartek-testimonial col-xl-4 col-lg-4 col-sm-12 col-12">
      <div className="testimonial-box" style={{ backgroundImage: `url(/images/pattern.png)` }}>
        <i className="fas fa-quote-left i-tag"></i>
        <div className="d-flex justify-content-center">
          <div className="user-image">
            <img src={profilePic.file.url} alt="..." />
          </div>
        </div>
        <div className="text">{feedback.feedback}</div>

        <div className="d-flex justify-content-center mt-2">
          <div className="designation">
            <h6>{userName}</h6>
            <p className="mb-0">
              <small>{userDesignation}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
