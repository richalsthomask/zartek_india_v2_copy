import FooterContentUi from "@/components/Helpers/FooterContent";
import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { Link } from "gatsby";
import React from "react";
import { BrandLogo } from "../Header/Brandlogo";
import { HelpfulLinks } from "./HelpfulLinks";
import { Locations } from "./Locations";

interface FooterComponentProps {
  content?: any;
}

export const FooterComponent: React.FC<FooterComponentProps> = ({ content }) => {
  const url = useBaseURL();

  return (
    <footer className="pt-3">
      {content && <FooterContentUi content={content} />}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <BrandLogo homeURL={url} logoMode="light" />
            <div className="text mt-5">
              Zartek Technologies Private Limited is a leading software development company in India
              with expertise in mass consumer technology products. Zartek is incubated in Kerala
              Startup Mission in Kochi, India.
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <h5>Helpful Links</h5>
            <HelpfulLinks baseURL={url} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <h5>Locations</h5>
            <Locations />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5>Contact Us</h5>
            <div className="address">
              <p>
                Kerala Technology Innovation Zone
                <br />
                Kinfra Hi-tech Park, Kalamassery, Kochi, India
              </p>
              <p>
                Phone:
                <a id="footer-phone-click" href="tel:+91 8069647545">
                  (+91) 8069647545
                </a>
              </p>
              <p>
                <span>E-Mail: </span>
                <a id="email-click-ref" href="mailto:info@zartek.in">
                  info@zartek.in
                </a>
              </p>
              <p>
                <span>Follow Us On: </span>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/zartek-tech"
                  rel="noreferrer"
                >
                  <img
                    src="/images/linkedin.png"
                    className="mb-1"
                    alt="..."
                    height="16"
                    width="16"
                  />
                </Link>
              </p>
              <p>
                <Link to="/why-join-us/">Why Join Us</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright">
              © {new Date().getFullYear().toString()} Zartek. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <iframe
        src="https://embeds.beehiiv.com/65b561d7-975b-4e00-b114-b7c0834d5c36"
        data-test-id="beehiiv-embed"
        width="100%"
        title="beehiiv"
        height="320"
        style={{
          borderRadius: "4px",
          border: "2px solid #e5e7eb",
          margin: "0",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </footer>
  );
};
