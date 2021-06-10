import {
  BulletPointsWithImageType,
  ServiceAreaModelType,
  TestimonialType,
  WelcomeAreaPropType,
} from "@/@types/types";
import loadable from "@loadable/component";
import React, { Component } from "react";
import { Layout } from "../Layout";
import { Testimonials } from "./Testimonials";
import { WelcomeArea } from "./WelcomeArea";

const ServicesOffered = loadable(() =>
  import("@/components/App/ServicesOffered").then((c) => c.ServicesOffered),
);

const Features = loadable(() => import("@/components/App/Features").then((c) => c.Features));

interface HomePageProps {
  contentfulHomePage: {
    welcomeArea: WelcomeAreaPropType;
    serviceArea: ServiceAreaModelType;
    featureArea: BulletPointsWithImageType;
    testimonials: TestimonialType[];
  };
}

export default class HomePage extends Component<HomePageProps> {
  render(): JSX.Element {
    const { welcomeArea, serviceArea, featureArea, testimonials } = this.props.contentfulHomePage;

    return (
      <Layout>
        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={serviceArea} />
        <Features features={featureArea} />
        <Testimonials testimonials={testimonials} />
      </Layout>
    );
  }
}
