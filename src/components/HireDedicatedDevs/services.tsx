import React from "react";

interface HireDedicatedDevelopersServicesProps {
  data: {
    title: string;
    position: "Image Left Content Right" | "Image Right Content Left";
    image: {
      file: {
        url: string;
      };
    };
    content: {
      content: string;
    };
    learnMoreLink?: string;
  };
}

const HireDedicatedDevelopersServices: React.FC<HireDedicatedDevelopersServicesProps> = ({
  data,
}) => {
  return (
    <div id="services">
      <div className="container my-5">
        <div
          className={
            data.position === "Image Left Content Right"
              ? "row flex-column-reverse flex-lg-row"
              : "row flex-row-reverse"
          }
        >
          <div className="col-lg-6 col-12">
            <img alt="..." src={data.image.file.url} className="img-fluid" />
          </div>
          <div className="col-lg-6 col-12">
            <div className="services-box p-5">
              <h3 className="mb-4">{data.title}</h3>
              <p>{data.content.content}</p>

              {data?.learnMoreLink ? (
                <a
                  href={data.learnMoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-link p-0 mt-4 learn-more-btn"
                  role="button"
                >
                  Learn more{" "}
                  <img className="img-fluid svg-icon" alt="..." src="/img/arrow-icon.svg" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireDedicatedDevelopersServices;
