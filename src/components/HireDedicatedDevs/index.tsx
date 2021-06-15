import { HireDedicatedDevPodType } from "@/@types/types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface HireDedicatedDevelopersProps {
  title: string;
  description: { description: string };
  pods: HireDedicatedDevPodType[];
  seo: SEOType;
}

export default class HireDedicatedDevelopers extends Component<HireDedicatedDevelopersProps> {
  render(): JSX.Element {
    const {
      description: { description },
      title,
      pods,
      seo,
    } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle="Hire dedicated developers"
          routes={[
            { path: "/", title: "Home" },
            { path: "/hire-dedicated-developer/", title: "Hire dedicated developer" },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">{title}</h2>
                </div>
                <p className="pre-line-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              {pods.map(({ id, description, icon, slug, title }) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                    <ServiceInfoCard
                      cardDescription={description}
                      cardIcon={icon}
                      cardTitle={title}
                      routerLink={"/contact/"}
                      addBaseURL={true}
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
