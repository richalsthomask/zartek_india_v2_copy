import ServicesList from "@/components/Services";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Services: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SERVICES_LIST_PUNE {
          contentfulServicesPage(use: { eq: "Use This space to access Services Page - Pune" }) {
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
