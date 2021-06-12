import { ServiceModelType } from "@/@types/types";
import { Layout } from "@/components/Layout";
import React, { Component } from "react";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface ServicesListProps {
  services: ServiceModelType[];
}

export default class ServicesList extends Component<ServicesListProps> {
  render(): JSX.Element {
    const { services } = this.props;

    return (
      <Layout>
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
              {services.map(
                ({ serviceCardIcon, serviceCardShortDescription, serviceCardTitle, slug, id }) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                      <ServiceInfoCard
                        cardDescription={serviceCardShortDescription}
                        cardIcon={serviceCardIcon}
                        cardTitle={serviceCardTitle}
                        routerLink={"/" + slug}
                      />
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
