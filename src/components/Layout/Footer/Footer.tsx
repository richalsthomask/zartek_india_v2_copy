import { baseURLState } from "@/state/atoms";
import { Link } from "gatsby";
import React, { FC } from "react";
import { useSetRecoilState } from "recoil";

export const FooterComponent: FC = () => {
  const setBaseURL = useSetRecoilState(baseURLState);

  return (
    <React.Fragment>
      <Link to="/" onClick={() => setBaseURL("")}>
        kochi
      </Link>
      <br />
      <Link to="/hyderabad" onClick={() => setBaseURL("hyderabad")}>
        hyder
      </Link>
      <br />

      <Link to="/pune" onClick={() => setBaseURL("pune")}>
        pune
      </Link>
      <br />

      <Link to="/coimbatore" onClick={() => setBaseURL("coimbatore")}>
        coimbatore
      </Link>
    </React.Fragment>
  );
};
