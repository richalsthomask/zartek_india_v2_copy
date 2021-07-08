import Testimonials from "@/components/Testimonials";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

export default function TestimonialsPage(): JSX.Element {
  return (
    <StaticQuery
      query={graphql`
        query GET_TESTIMONIALS_FOR_KOCHI {
          contentfulTestimonialsPage(use: { eq: "Use This space to access Testimonials Page" }) {
            testimonials {
              testimonial {
                id
                userName
                userDesignation
                profilePic {
                  file {
                    url
                  }
                }
                feedback {
                  feedback
                }
              }
            }
          }
        }
      `}
      render={({ contentfulTestimonialsPage: { testimonials } }) => (
        <Testimonials testimonials={testimonials} />
      )}
    />
  );
}
