import React from "react";
import { Layout } from "../Layout";
import SEO from "../SEO";
import AllClientsList from "../Shared/AllClients";
import { Breadcrumb } from "../Shared/Breadcrumb";
import TopClients from "../Shared/TopClients";
import DedicatedHireServices from "./dedicated-hire-service";
import GetStarted from "./get-started";
import HowToHire from "./how-to";
import HireDedicatedDevelopersServices from "./services";
import Testimonials from "./testimonials";
import HireDedicatedDevelopersWhyHire from "./why-hire";

export default class HireDedicatedDevelopers extends React.Component<any> {
  render(): JSX.Element {
    const {
      seo,
      whyHireTitle,
      whyHireCards,
      testimonialTitle,
      testimonials,
      contentSectionTop,
      contentSectionBottom,
      list,
      footerContent,
    } = this.props;

    return (
      <Layout footerContent={footerContent?.raw}>
        <SEO contentfulSeo={seo} />
        <Breadcrumb
          currentPageTitle="Hire Dedicated Developers"
          routes={[
            { path: "/", title: "Home" },
            { path: "/hire-dedicated-developer/", title: "Hire Dedicated Developers in India" },
          ]}
        />

        <div id="dedicated-developers">
          <TopClients />
          <HireDedicatedDevelopersWhyHire cards={whyHireCards} title={whyHireTitle} />
          <HireDedicatedDevelopersServices data={contentSectionTop} />
          <Testimonials list={testimonials} title={testimonialTitle} />
          <HowToHire />
          <HireDedicatedDevelopersServices data={contentSectionBottom} />
          <GetStarted />
          <DedicatedHireServices data={list} />
          <AllClientsList />
        </div>
      </Layout>
    );
  }
}
