import ContactUs from "@/components/ContactUs";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_CONTACT_US_PAGE_COIMBATORE {
          contentfulContactUsPage(
            use: { eq: "Use This space to access Contact Us Page - Coimbatore" }
          ) {
            locationImage {
              file {
                url
              }
            }
          }
        }
      `}
      render={({ contentfulContactUsPage: { locationImage } }) => (
        <ContactUs locationImage={locationImage} />
      )}
    />
  );
};

export default Contact;
