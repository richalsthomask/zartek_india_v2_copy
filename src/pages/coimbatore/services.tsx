import ServicesList from "@/components/Services";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Services: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SERVICES_LIST_COIMBATORE {
          contentfulServicesPage(
            use: { eq: "Use This space to access Services Page - Coimbatore" }
          ) {
            service {
              id
              slug
              serviceCardTitle
              serviceCardShortDescription
              serviceCardIcon {
                file {
                  url
                }
              }
            }
          }
        }
      `}
      render={({ contentfulServicesPage: { service } }) => <ServicesList services={service} />}
    />
  );
};

export default Services;
