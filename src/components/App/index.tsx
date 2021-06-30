import {
  BulletPointsWithImageType,
  FAQType,
  ParallaxStatPodType,
  ServiceAreaModelType,
  StructuredDataSnippet,
  TestimonialType,
  WelcomeAreaPropType,
} from "@/@types/types";
import loadable from "@loadable/component";
import React, { Component } from "react";
import { StructuredDataSnippetTag } from "../Helpers/StructuredDataTag";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { WelcomeArea } from "../Shared/Ui/WelcomeArea";

const ServicesOffered = loadable(() =>
  import("@/components/Shared/Ui/ServicesOffered").then((c) => c.ServicesOffered),
);
const Features = loadable(() => import("@/components/Shared/Ui/Features").then((c) => c.Features));
const FrequentlyAskedQuestions = loadable(() =>
  import("@/components/Shared/Ui/FAQs").then((c) => c.FrequentlyAskedQuestions),
);
const LatestBlogs = loadable(() => import("./LatestBlogs").then((c) => c.LatestBlogs));

const Stats = loadable(() => import("./Stats").then((c) => c.Stats));

const Testimonials = loadable(() => import("./Testimonials").then((c) => c.Testimonials));

interface HomePageProps {
  contentfulHomePage: {
    seo: SEOType;
    welcomeArea: WelcomeAreaPropType;
    serviceArea: ServiceAreaModelType;
    featureArea: BulletPointsWithImageType;
    testimonials: TestimonialType[];
    statsContainer: ParallaxStatPodType[];
    faQs: FAQType[];
    structuredDataSnippets?: StructuredDataSnippet[];
    footerContent?: { raw: any };
  };
}

export default class HomePage extends Component<HomePageProps> {
  render(): JSX.Element {
    const {
      welcomeArea,
      serviceArea,
      featureArea,
      testimonials,
      statsContainer,
      faQs,
      seo,
      structuredDataSnippets,
      footerContent,
    } = this.props.contentfulHomePage;

    return (
      <Layout footerContent={footerContent?.raw}>
        <StructuredDataSnippetTag snippets={structuredDataSnippets} />

        <SEO contentfulSeo={seo} />

        <WelcomeArea welcomeArea={welcomeArea} />
        <ServicesOffered serviceProp={serviceArea} btnName={"SERVICES"} />
        <Features features={featureArea} />
        <Testimonials testimonials={testimonials} />
        <Stats stats={statsContainer} />
        <FrequentlyAskedQuestions faQs={faQs} />
        <LatestBlogs />
      </Layout>
    );
  }
}
