import FooterContentUi from "@/components/Helpers/FooterContent";
import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import React, { FC } from "react";
import { BrandLogo } from "../Header/Brandlogo";
import { HelpfulLinks } from "./HelpfulLinks";
import { Locations } from "./Locations";

interface FooterComponentProps {
  content?: any;
}

export const FooterComponent: FC<FooterComponentProps> = ({ content }) => {
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
              <p>Phone: (+91) 7736226886</p>
              <p>
                <span>E-Mail:</span>
                <a href="mailto:info@zartek.in">info@zartek.in</a>
              </p>
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/zartek-tech"
                    rel="noreferrer"
                  >
                    <img src="/images/linkedin.png" alt="..." height="16" width="16" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/ZartekQ/" rel="noreferrer">
                    <img src="/images/facebook.png" alt="..." height="16" width="16" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/zartekq" rel="noreferrer">
                    <img src="/images/twitter.png" alt="..." height="16" width="16" />
                  </a>
                </li>
              </ul>
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
    </footer>
  );
};
