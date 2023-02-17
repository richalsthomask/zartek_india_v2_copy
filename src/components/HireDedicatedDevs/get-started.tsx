import { Link } from "gatsby";
import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div className="container my-5">
      <div id="get_started" className="rounded-5 py-5" style={{ borderRadius: "2rem" }}>
        <div className="col-xl-8 col-lg-10 m-auto">
          <h1 className="my-5">
            Get Started with your <br />
            Dream Team
          </h1>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="d-grid gap-2 col-xl-3 col-lg-5 col-sm-6 col-8 mx-auto">
              <Link to="/contact/">
                <button
                  className="btn btn-primary button-blue button-white py-3 px-3"
                  style={{ borderRadius: "2rem" }}
                >
                  Hire Developers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
