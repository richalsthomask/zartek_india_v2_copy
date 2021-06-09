import React, { Component, Fragment } from "react";
import { HeaderComponent } from "./Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export class Layout extends Component<LayoutProps> {
  render(): JSX.Element {
    return (
      <Fragment>
        <HeaderComponent />
        {this.props.children}
      </Fragment>
    );
  }
}
