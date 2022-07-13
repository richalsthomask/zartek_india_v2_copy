import { ServiceModelType } from "@/@types/types";
import { Layout } from "@/components/Layout";
import React from "react";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface ServicesListProps {
  services: ServiceModelType[];
  seo: SEOType;
}

export default class ServicesList extends React.Component<ServicesListProps> {
  render(): JSX.Element {
    const { services, seo } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle="Services"
          routes={[
            { path: "/", title: "Home" },
            { path: "/services/", title: "Services" },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              {services.map(({ icon, serviceDescription, serviceTitle, slug, id }) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                    <ServiceInfoCard
                      cardDescription={serviceDescription}
                      cardIcon={icon}
                      cardTitle={serviceTitle}
                      routerLink={"/" + slug}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
