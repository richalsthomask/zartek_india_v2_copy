import { WelcomeAreaPropType } from "@/@types/types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import { WelcomeArea } from "./WelcomeArea";

interface HomePageProps {
  contentfulHomePage: { welcomeArea: WelcomeAreaPropType };
}

export default class HomePage extends Component<HomePageProps> {
  render(): JSX.Element {
    const { welcomeArea } = this.props.contentfulHomePage;

    return (
      <Layout>
        <WelcomeArea welcomeArea={welcomeArea} />
      </Layout>
    );
  }
}
