import React from "react";

const MoreServicesOffered: React.FC<{
  title: string;
  serviceOption: { id: string; title: string; link: string }[];
}> = ({ serviceOption, title }) => {
  return (
    <div id="location-bg">
      <div className="container z-index">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="text-white"> {title} </h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="border" />
        </div>
        <div className="row mt-5">
          {serviceOption.map((option) => {
            return (
              <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 col-12 location" key={option.id}>
                <a href={option.link} target="_blank" rel="noreferrer" className="text-white">
                  <p>
                    <span className="location-icon">
                      <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                    </span>
                    <span>{option.title}</span>
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreServicesOffered;
