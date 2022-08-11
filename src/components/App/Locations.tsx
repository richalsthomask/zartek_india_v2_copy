import { Link } from "gatsby";
import React from "react";

const Locations: React.FC = () => {
  return (
    <div id="location-bg">
      <div className="container z-index">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="text-white">We Offer Our services to These Locations</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="border" />
        </div>
        <div className="row">
          <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 col-12 mt-5 location">
            <Link to="/pune/" className="text-white">
              <p>
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Pune</strong>
                </span>
              </p>
            </Link>

            <Link to="/" className="text-white">
              <p>
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Kochi</strong>
                </span>
              </p>
            </Link>

            <a
              href="https://www.zartek.qa/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <p>
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Qatar</strong>
                </span>
              </p>
            </a>
          </div>
          <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 col-12 mt-5 location">
            <Link to="/coimbatore/">
              <p className="text-white">
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Coimbatore</strong>
                </span>
              </p>
            </Link>

            <Link to="/hyderabad/">
              <p className="text-white">
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Hyderabad</strong>
                </span>
              </p>
            </Link>

            <a href="https://www.zartek.ca/" target="_blank" rel="noreferrer">
              <p className="text-white">
                <span className="location-icon">
                  <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                </span>
                <span>
                  Mobile App Development Company in <strong>Toronto</strong>
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
