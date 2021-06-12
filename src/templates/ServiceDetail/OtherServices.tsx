import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { graphql, Link, StaticQuery } from "gatsby";
import React, { FC } from "react";

interface OtherServicesFilterType {
  use: string;
  service: {
    id: string;
    serviceCardTitle: string;
    slug: string;
  }[];
}

export const OtherServices: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulServicesPage {
            nodes {
              use
              service {
                id
                slug
                serviceCardTitle
              }
            }
          }
        }
      `}
      render={({ allContentfulServicesPage: { nodes } }) => {
        return <OtherServicesList nodes={nodes} />;
      }}
    />
  );
};

const OtherServicesList: FC<{ nodes: OtherServicesFilterType[] }> = ({ nodes }) => {
  const url = useBaseURL();

  function servicesFiltered() {
    if (url === "/pune") {
      return nodes.filter((node) => node.use === "Use This space to access Services Page - Pune")[0]
        .service;
    }

    if (url === "/coimbatore") {
      return nodes.filter(
        (node) => node.use === "Use This space to access Services Page - Coimbatore",
      )[0].service;
    }

    if (url === "/hyderabad") {
      return nodes.filter(
        (node) => node.use === "Use This space to access Services Page - Hyderabad",
      )[0].service;
    }

    return nodes.filter((node) => node.use === "Use This space to access Services Page - Kochi")[0]
      .service;
  }

  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <aside className="default-aside">
        <div className="sidebar">
          <ul>
            {servicesFiltered().map(({ id, serviceCardTitle, slug }) => {
              return (
                <li key={id}>
                  <Link activeClassName="active" to={"/" + slug}>
                    {serviceCardTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="home-services-item box active">
            <h5 className="services-title">
              Tell us about your projects and we’ll get back to you with details on how we can make
              this work.
            </h5>
            <a className="btn-white-line" href="contact.html">
              Contact Us
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};
