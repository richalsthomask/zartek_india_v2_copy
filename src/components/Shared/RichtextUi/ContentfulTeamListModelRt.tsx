import React, { FC } from "react";
import { TestimonialPod } from "../Ui/TestimonialPod";

interface ContentfulTeamListModelRtProps {
  teamMembers: {
    about: string;
    id: string;
    name: string;
    profilePic: {
      file: {
        url: string;
      };
    };
    role: string;
  }[];
}

export const ContentfulTeamListModelRt: FC<ContentfulTeamListModelRtProps> = ({ teamMembers }) => {
  return (
    <section className="section background pbottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Zartek Team</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Here is our team of experienced product startegists and developers to deliver the
                best outcome for you.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map(({ about, id, name, profilePic, role }) => {
            return (
              <TestimonialPod
                review={about}
                key={id}
                reviewerName={name}
                reviewerRole={role}
                reviewerProfilePic={profilePic}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
