import {
  BulletPointsWithImageType,
  ServiceAreaModelType,
  WelcomeAreaPropType,
} from "@/@types/types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import { Features } from "./Features";
import { ServicesOffered } from "./ServicesOffered";
import { WelcomeArea } from "./WelcomeArea";

// const ServicesOffered = loadable(() =>
//   import("@/components/App/ServicesOffered").then((c) => c.ServicesOffered),
// );

interface HomePageProps {
  contentfulHomePage: {
    welcomeArea: WelcomeAreaPropType;
    serviceArea: ServiceAreaModelType;
    featureArea: BulletPointsWithImageType;
  };
}

export default class HomePage extends Component<HomePageProps> {
  render(): JSX.Element {
    const { welcomeArea, serviceArea, featureArea } = this.props.contentfulHomePage;

    return (
      <Layout>
        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={serviceArea} />
        <Features features={featureArea} />
      </Layout>
    );
  }
}
