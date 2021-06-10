import { Link } from "gatsby";
import React, { FC } from "react";

export const FooterComponent: FC = () => {
  return (
    <React.Fragment>
      <Link to="/">kochi</Link>
      <br />
      <Link to="/hyderabad/" state={{ loca: "hyderabad" }}>
        hyder
      </Link>
      <br />

      <Link to="/pune/">pune</Link>
      <br />

      <Link to="/coimbatore/">coimbatore</Link>
    </React.Fragment>
  );
};
