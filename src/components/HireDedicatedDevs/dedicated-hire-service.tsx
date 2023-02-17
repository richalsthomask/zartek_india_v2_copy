import { Link } from "gatsby";
import React from "react";

interface DedicatedHireServicesProps {
  data: {
    id: string;
    slug: string;
    cardIcon: {
      file: {
        url: string;
      };
    };
    cardTitle: string;
    cardDescription: string;
  }[];
}

const DedicatedHireServices: React.FC<DedicatedHireServicesProps> = ({ data }) => {
  return (
    <div id="hire_services" className="mb-5">
      <div className="container">
        <div className="col-12">
          <h2 className="text-center my-5">Our Dedicated Hire Services</h2>
        </div>
        <div className="row">
          {data.map((each) => {
            return (
              <div className="col-lg-4 mb-4" key={each.id}>
                <div
                  className="hire_services-box p-4 rounded-2"
                  style={{
                    borderRadius: "0.7rem",
                  }}
                >
                  <img className="img-fluid" alt="..." src={each.cardIcon.file.url} />
                  <h5 className="my-3">{each.cardTitle}</h5>
                  <p className="cut-text-2">{each.cardDescription}</p>
                  <Link
                    to={"/" + each.slug + "/"}
                    className="btn btn-link ps-0 learn-more-btn"
                    role="button"
                  >
                    <a>Learn more</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DedicatedHireServices;
