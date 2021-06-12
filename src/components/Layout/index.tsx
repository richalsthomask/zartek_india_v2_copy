import React, { Component, Fragment } from "react";
import { FooterComponent } from "./Footer/Footer";
import { HeaderComponent } from "./Header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export class Layout extends Component<LayoutProps, { isMounted: boolean }> {
  state = {
    isMounted: true,
  };

  componentDidMount(): void {
    this.setState({ isMounted: true });

    if (typeof window === "undefined" || typeof document === "undefined" || !this.state.isMounted) {
      return;
    }

    (function (w: any, d) {
      if (d.getElementById("chat-bot-launcher-container")) {
        return;
      }
      w.CollectId = "5c0283cd001a8304e04b8070";
      const h = d.head || d.getElementsByTagName("head")[0];
      const s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);
  }

  componentWillUnmount(): void {
    this.setState({ isMounted: false });
  }

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
