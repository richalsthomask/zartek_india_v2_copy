import React, { Component } from "react";
import { Layout } from "../Layout";
import { Breadcrumb } from "../Shared/Breadcrumb";

interface HireDedicatedDevelopersProps {
  title: string;
  description: { description: string };
}

export default class HireDedicatedDevelopers extends Component<HireDedicatedDevelopersProps> {
  render(): JSX.Element {
    const {
      description: { description },
      title,
    } = this.props;

    return (
      <Layout>
        <Breadcrumb
          currentPageTitle="Hire dedicated developers"
          routes={[
            { path: "/", title: "Home" },
            { path: "/hire-dedicated-developer", title: "Hire dedicated developer" },
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
      </Layout>
    );
  }
}
