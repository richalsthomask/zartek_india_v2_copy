import React, { Component, Fragment } from "react";
import { FooterComponent } from "./Footer/Footer";
import { HeaderComponent } from "./Header/header";
import { Loader } from "./Loader";

interface LayoutProps {
  children: React.ReactNode;
  footerContent?: any;
}

export class Layout extends Component<
  LayoutProps,
  { isMounted: boolean; timeoutId?: NodeJS.Timeout }
> {
  state = {
    isMounted: true,
    timeoutId: null,
  };

  componentDidMount(): void {
    this.setState({ isMounted: true });
    if (typeof window === "undefined" || typeof document === "undefined" || !this.state.isMounted) {
      return;
    }
    if (document.getElementById("chat-bot-launcher-container")) {
      return;
    }
    this.setState({
      timeoutId: setTimeout(() => {
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
      }, 6000),
    });
  }

  componentWillUnmount(): void {
    this.setState({ isMounted: false });
    clearTimeout(this.state.timeoutId);
  }

  render(): JSX.Element {
    return (
      <Fragment>
        <Loader />
        <HeaderComponent />
        <section className="page">{this.props.children}</section>
        <FooterComponent content={this.props.footerContent} />
      </Fragment>
    );
  }
}
