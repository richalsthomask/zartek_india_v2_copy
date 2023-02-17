import { Link } from "gatsby";
import React from "react";

const HowToHire: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="col-12">
        <h3 className="text-center">How to hire top developers ?</h3>
      </div>
      <div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3 mt-5">
        <div className="col-6 col-sm-3 hire_developers-one">
          <div className="hire_developers-box">
            <div
              className="hire_developers-icon_box developers-icon-one rounded-4"
              style={{ borderRadius: "1rem" }}
            >
              <img className="img-fluid" alt="..." src="/img/developers-icon-one.svg" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="text-center mt-4">
              {" "}
              Tell us the <br /> skills you need{" "}
            </h5>
          </div>
        </div>

        <div className="col-6 col-sm-3 hire_developers-two">
          <div className="hire_developers-box">
            <div
              className="hire_developers-icon_box developers-icon-two rounded-4"
              style={{ borderRadius: "1rem" }}
            >
              <img className="img-fluid" alt="..." src="/img/developers-icon-2.svg" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="text-center mt-4">
              {" "}
              We find the best <br /> talent for you{" "}
            </h5>
          </div>
        </div>

        <div className="col-6 col-sm-3 hire_developers-three">
          <div className="hire_developers-box">
            <div
              className="hire_developers-icon_box developers-icon-three rounded-4"
              style={{ borderRadius: "1rem" }}
            >
              <img className="img-fluid" alt="..." src="/img/developers-icon-3.svg" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="text-center mt-4">
              {" "}
              Schedule <br /> interviews{" "}
            </h5>
          </div>
        </div>

        <div className="col-6 col-sm-3 hire_developers-four">
          <div className="hire_developers-box">
            <div
              className="hire_developers-icon_box developers-icon-four rounded-4"
              style={{ borderRadius: "1rem" }}
            >
              <img className="img-fluid" alt="..." src="/img/developers-icon-4.svg" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="text-center mt-4">
              {" "}
              Hire and <br /> Start Working
            </h5>
          </div>
        </div>
      </div>

      <div className="col-12 my-5">
        <div className="d-flex justify-content-center">
          <Link to="/contact/">
            <button
              className="btn btn-primary button-blue py-3 px-5"
              style={{ borderRadius: "2rem" }}
            >
              Hire Developers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToHire;
