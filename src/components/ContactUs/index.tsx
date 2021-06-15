import { FileType } from "@/@types/types";
import GMaps from "@/components/Helpers/Maps.jsx";
import React, { Component } from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";

interface ContactUsProps {
  locationImage: FileType;
  seo: SEOType;
}

export default class ContactUs extends Component<ContactUsProps> {
  render(): JSX.Element {
    return (
      <Layout>
        <SEO contentfulSeo={this.props.seo} />
        <Breadcrumb
          currentPageTitle="Contact Us"
          routes={[
            { path: "/", title: "Home" },
            { path: "/contact/", title: "Contact Us" },
          ]}
        />
        <div
          className="typeform-widget"
          data-url="https://gocollabo.typeform.com/to/u4L7Sl"
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
                src="https://gocollabo.typeform.com/to/u4L7Sl?typeform-embed=embed-widget&amp;embed-hide-footer=true&amp;embed-hide-headers=true&amp;embed-opacity=50&amp;typeform-embed-id=136dm"
                width="100%"
                allow="camera; microphone; autoplay; encrypted-media;"
                data-qa="iframe"
                title="typeform-embed"
                style={{ border: "0px", minHeight: "515px" }}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pb-1 pt-0">
          <div className="map-wrapper">
            <div className="map-canvas">
              <GMaps />
            </div>
            <div className="container">
              <div className="row">
                <div className="offset-lg-8 col-lg-4 col-md-12 col-sm-12">
                  <div className="contact-info">
                    <div className="item">
                      <i className="fa fa-location-arrow"></i>
                      <div className="txt">
                        <span>
                          Kerala Technology Innovation Zone
                          <br />
                          Kinfra Hi-Tech Park, Kalamassery, Kochi, India
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <i className="fa fa-phone"></i>
                      <div className="txt">
                        <span>
                          (+91) 9176107417
                          <br />
                          (+91) 7722047027
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <i className="fa fa-envelope"></i>
                      <div className="txt">
                        <span>
                          <a href="mailto:info@zartek.in">info@zartek.in</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
