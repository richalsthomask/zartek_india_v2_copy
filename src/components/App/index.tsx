import { WelcomeAreaPropType } from "@/@types/types";
import { Link } from "gatsby";
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
        <h1>Hello</h1>
        <h1>Hello</h1>
        <Link to="/">kochi</Link>
        <Link to="/hyderabad">hyder</Link>
        <Link to="/pune">pune</Link>
        <Link to="/coimbatore">coimbatore</Link>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>v<h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>v<h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>v<h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>v<h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>v<h1>Hello</h1>
      </Layout>
    );
  }
}
