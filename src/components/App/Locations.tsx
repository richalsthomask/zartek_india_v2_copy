import { Link } from "gatsby";
import React from "react";

const locations = [
  {
    label: "Pune",
    link: "/pune/",
  },
  {
    label: "Kochi",
    link: "/",
  },
  {
    label: "Trivandrum",
    link: "/trivandrum/",
  },
  {
    label: "Qatar",
    link: "https://www.zartek.qa/",
    target: "_blank",
  },
  {
    label: "Coimbatore",
    link: "/coimbatore/",
  },
  {
    label: "Chennai",
    link: "/chennai/",
  },
  {
    label: "Hyderabad",
    link: "/hyderabad/",
  },
  {
    label: "Indore",
    link: "/indore/",
  },
  {
    label: "Toronto",
    link: "https://www.zartek.ca/",
    target: "_blank",
  },
];
function splitArrayInHalf(
  array: {
    label: string;
    link: string;
    target?: string;
  }[],
  url: string,
) {
  //checking if it is same page currently in use
  const tempArray = array?.filter((val) => val.link !== url);
  const midPoint = Math.ceil(tempArray.length / 2);
  const firstHalf = tempArray.slice(0, midPoint);
  const secondHalf = tempArray.slice(midPoint);
  return [firstHalf, secondHalf];
}

interface LocationsProps {
  url: string;
}

const Locations: React.FC<LocationsProps> = ({ url }) => {
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
        <div className="row align-items-start mt-5">
          {splitArrayInHalf(locations, url).map((locationArray, index) => (
            <div key={index} className="col-xl-6 col-sm-6 col-md-6 col-lg-6 col-12 location">
              {locationArray?.map((location, locationIndex: number) => {
                return (
                  <Link
                    key={locationIndex}
                    to={location.link}
                    target={location.target}
                    rel="noreferrer"
                    className="text-white"
                  >
                    <p className="row justify-items-center">
                      <span className="location-icon">
                        <img src="/images/location-icon.svg" style={{ width: "14px" }} alt="..." />
                      </span>
                      <span>
                        Mobile App Development Company in <strong>{location.label}</strong>
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Locations;
