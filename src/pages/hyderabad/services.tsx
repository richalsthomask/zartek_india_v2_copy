import ServicesList from "@/components/Services";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Services: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_SERVICES_LIST_HYDERABAD {
          contentfulServicesPage(
            use: { eq: "Use This space to access Services Page - Hyderabad" }
          ) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            services {
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
      render={({ contentfulServicesPage: { services, seo } }) => (
        <ServicesList services={services} seo={seo} />
      )}
    />
  );
};

export default Services;
