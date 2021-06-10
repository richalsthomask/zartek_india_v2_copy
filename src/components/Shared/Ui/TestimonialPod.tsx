import { TestimonialType } from "@/@types/types";
import { LazyImage } from "@/components/Helpers/LazyImage";
import React, { FC } from "react";

type TestimonialPodProps = TestimonialType;

export const TestimonialPod: FC<TestimonialPodProps> = ({
  review,
  reviewerName,
  reviewerProfilePic,
  reviewerRole,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12  grid-class">
      <div className="team-item">
        <div className="header mb-1">
          <div className="img">
            <LazyImage alt="testimonial" height={75} width={75} src={reviewerProfilePic.file.url} />
          </div>
          <div className="info">
            <strong>{reviewerName}</strong>
            <span>{reviewerRole}</span>
          </div>
        </div>
        <div className="body ">{review}</div>
      </div>
    </div>
  );
};
