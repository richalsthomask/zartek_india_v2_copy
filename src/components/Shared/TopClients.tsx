import React from "react";

const TopClients: React.FC = () => {
  return (
    <div id="our-clients">
      <div className="container">
        <h5>Our Amazing Clients</h5>
        <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3">
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/cred-logo.svg" alt="..." className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/hyundai-logo.svg" alt="..." className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/sainaplay-logo.png" alt="..." className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/josco-logo.svg" alt="..." className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/perch-logo.png" alt="..." className="img-fluid" />
            </div>
          </div>
          <div className="col">
            <div className="our-clients-logo">
              <img src="/img/infosys-logo.svg" alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopClients;
