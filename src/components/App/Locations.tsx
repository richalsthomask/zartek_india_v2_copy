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
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <Link to="/pune/">Pune</Link>
                </strong>
              </span>
            </p>
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <Link to="/">Kochi</Link>
                </strong>
              </span>
            </p>
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <a href="https://www.zartek.qa/" target="_blank" rel="noreferrer">
                    Qatar
                  </a>
                </strong>
              </span>
            </p>
          </div>
          <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 col-12 mt-5 location">
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <Link to="/coimbatore/">Coimbatore</Link>
                </strong>
              </span>
            </p>
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <Link to="/hyderabad/">Hyderabad</Link>
                </strong>
              </span>
            </p>
            <p className="text-white">
              <span className="location-icon">
                <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
              </span>
              <span>
                Mobile App Development Company in{" "}
                <strong>
                  <a href="https://www.zartek.ca/" target="_blank" rel="noreferrer">
                    Toronto
                  </a>
                </strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
