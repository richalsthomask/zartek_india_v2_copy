import React, { PureComponent } from "react";
import { Layout } from "../Layout";
import { Breadcrumb } from "../Shared/Breadcrumb";

export default class PartnerWithUs extends PureComponent {
  render(): JSX.Element {
    return (
      <Layout>
        <Breadcrumb
          currentPageTitle="Partner with us"
          routes={[
            { path: "/", title: "Home" },
            { path: "/partner-with-us/", title: "Partner with us" },
          ]}
        />
        <div
          className="typeform-widget"
          data-url="https://tyiilhexsjg.typeform.com/to/LiVxOGBv"
          data-transparency="100"
          data-hide-headers="true"
          data-hide-footer="true"
          style={{ width: "100%", height: "515px" }}
        >
          <div className="widget__WidgetWrapper-sc-1rxjz1n-0 NwqzB">
            <div className="widget__IframeWrapper-sc-1rxjz1n-2 cKLpKc">
              <iframe
                frameBorder="0"
                height="100%"
                src="https://tyiilhexsjg.typeform.com/to/LiVxOGBv?typeform-medium=embed-snippet"
                width="100%"
                allow="camera; microphone; autoplay; encrypted-media;"
                data-qa="iframe"
                title="typeform-embed"
                style={{ border: "0px", minHeight: "515px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
