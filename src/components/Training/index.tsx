import { TrainingModelType } from "@/@types/types";
import { Layout } from "@/components/Layout";
import React, { Component } from "react";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface TrainingListProps {
  list: TrainingModelType[];
  seo: SEOType;
}

export default class TrainingList extends Component<TrainingListProps> {
  render(): JSX.Element {
    const { list, seo } = this.props;

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
              {list?.map(
                ({
                  slug,
                  id,
                  trainingCardIcon,
                  trainingCardShortDescription,
                  trainingCardTitle,
                }) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                      <ServiceInfoCard
                        cardDescription={trainingCardShortDescription}
                        cardIcon={trainingCardIcon}
                        cardTitle={trainingCardTitle}
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
