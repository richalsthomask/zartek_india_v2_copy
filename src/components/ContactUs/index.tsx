import { FileType } from "@/@types/types";
import GMaps from "@/components/Helpers/Maps.jsx";
import { Widget } from "@typeform/embed-react";
import React, { useRef } from "react";
import { Layout } from "../Layout";
import SEO, { SEOType } from "../SEO";
import { Breadcrumb } from "../Shared/Breadcrumb";

interface ContactUsProps {
  locationImage: FileType;
  seo: SEOType;
}

const ContactUs: React.FC<ContactUsProps> = (props) => {
  const typeFormRef = useRef<HTMLButtonElement>(null);

  return (
    <Layout>
      <SEO contentfulSeo={props.seo} />
      <Breadcrumb
        currentPageTitle="Contact Us"
        routes={[
          { path: "/", title: "Home" },
          { path: "/contact/", title: "Contact Us" },
        ]}
      />

      <Widget
        height={515}
        id="u4L7Sl"
        className="p-2"
        style={{ border: "0px" }}
        onSubmit={() => {
          typeFormRef.current?.click();
        }}
      />

      <div className="pb-1 pt-0 mt-2">
        <div className="map-wrapper">
          <div className="map-canvas p-2">
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
                        <a href="tel:+91 9176107417">+91 9176107417</a>
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
      <button id="contact-typeform-submit" style={{ display: "none" }} ref={typeFormRef}></button>
    </Layout>
  );
};

export default ContactUs;
