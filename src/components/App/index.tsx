import {
  BulletPointsWithImageType,
  FAQType,
  ParallaxStatPodType,
  ServiceAreaModelType,
  TestimonialType,
  WelcomeAreaPropType,
} from "@/@types/types";
import loadable from "@loadable/component";
import React, { Component } from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { WelcomeArea } from "../Shared/Ui/WelcomeArea";
import { FrequentlyAskedQuestions } from "./FAQs";
import { Stats } from "./Stats";
import { Testimonials } from "./Testimonials";

const ServicesOffered = loadable(() =>
  import("@/components/Shared/Ui/ServicesOffered").then((c) => c.ServicesOffered),
);

const Features = loadable(() => import("@/components/Shared/Ui/Features").then((c) => c.Features));

interface HomePageProps {
  contentfulHomePage: {
    seo: SEOType;
    welcomeArea: WelcomeAreaPropType;
    serviceArea: ServiceAreaModelType;
    featureArea: BulletPointsWithImageType;
    testimonials: TestimonialType[];
    statsContainer: ParallaxStatPodType[];
    faQs: FAQType[];
  };
}

export default class HomePage extends Component<HomePageProps> {
  render(): JSX.Element {
    const { welcomeArea, serviceArea, featureArea, testimonials, statsContainer, faQs, seo } =
      this.props.contentfulHomePage;

    return (
      <Layout>
        <SEO contentfulSeo={seo} />

        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={serviceArea} btnName={"SERVICES"} />
        <Features features={featureArea} />
        <Testimonials testimonials={testimonials} />
        <Stats stats={statsContainer} />
        <FrequentlyAskedQuestions faQs={faQs} />
      </Layout>
    );
  }
}
