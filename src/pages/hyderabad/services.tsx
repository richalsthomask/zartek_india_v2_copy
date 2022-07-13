import ServicesList from "@/components/Services";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

const Services: React.FC = () => {
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
              serviceTitle
              serviceDescription
              slug
              icon {
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
