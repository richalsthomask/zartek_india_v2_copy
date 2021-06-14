import { SolutionPodType } from "@/@types/types";
import { Layout } from "@/components/Layout";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import React, { Component } from "react";
import SEO, { SEOType } from "../SEO";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface SolutionsProps {
  solutions: SolutionPodType[];
  seo: SEOType;
}

export default class Solutions extends Component<SolutionsProps> {
  render(): JSX.Element {
    const { solutions, seo } = this.props;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle="Zartek Solutions"
          routes={[
            { path: "/", title: "Home" },
            { path: "/solutions/", title: "Solutions" },
          ]}
        />

        <div className="page-bottom pbottom-70">
          <div className="container">
            <div className="row">
              {solutions.map(({ slug, id, icon, solutionDescription, solutionTitle }) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                    <ServiceInfoCard
                      cardDescription={solutionDescription}
                      cardIcon={icon}
                      cardTitle={solutionTitle}
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
