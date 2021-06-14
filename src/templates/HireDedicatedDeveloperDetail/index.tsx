import { Layout } from "@/components/Layout";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import React, { Component } from "react";

export default class HireDedicatedDeveloperDetail extends Component {
  render(): JSX.Element {
    return (
      <Layout>
        <Breadcrumb currentPageTitle="tab" routes={[{ path: "/", title: "Home" }]} />
      </Layout>
    );
  }
}
