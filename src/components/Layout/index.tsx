import React, { Component, Fragment } from "react";
import { FooterComponent } from "./Footer/Footer";
import { HeaderComponent } from "./Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export class Layout extends Component<LayoutProps> {
  render(): JSX.Element {
    return (
      <Fragment>
        <HeaderComponent />
        <section className="page">{this.props.children}</section>
        <FooterComponent />
      </Fragment>
    );
  }
}
