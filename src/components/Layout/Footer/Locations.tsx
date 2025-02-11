import { Link } from "gatsby";
import React, { FC } from "react";

export const Locations: FC = () => {
  return (
    <ul className="footer-nav">
      <li>
        <Link to={"/"}>
          <i className="fa fa-angle-right"></i>
          <span>Kochi</span>
        </Link>
      </li>
      <li>
        <Link to="/coimbatore/">
          <i className="fa fa-angle-right"></i>
          <span>Coimbatore</span>
        </Link>
      </li>
      <li>
        <Link to="/chennai/">
          <i className="fa fa-angle-right"></i>
          <span>Chennai</span>
        </Link>
      </li>
      <li>
        <Link to="/indore/">
          <i className="fa fa-angle-right"></i>
          <span>Indore</span>
        </Link>
      </li>
      <li>
        <Link to="/hyderabad/">
          <i className="fa fa-angle-right"></i>
          <span>Hyderabad</span>
        </Link>
      </li>
      <li>
        <Link to="/pune/">
          <i className="fa fa-angle-right"></i>
          <span>Pune</span>
        </Link>
      </li>
      <li>
        <Link to="/trivandrum/">
          <i className="fa fa-angle-right"></i>
          <span>Trivandrum</span>
        </Link>
      </li>
      <li>
        <Link to="https://www.zartek.ca" rel="noreferrer" target="_blank">
          <i className="fa fa-angle-right"></i>
          <span>Canada</span>
        </Link>
      </li>
      <li>
        <Link rel="noreferrer" to="https://www.zartek.qa" target="_blank">
          <i className="fa fa-angle-right"></i>
          <span>Qatar</span>
        </Link>
      </li>
    </ul>
  );
};
