import React from "react";

const ConnectHeader: React.FC = () => {
  return (
    <div className="text-center connect-layout brand_theme_bg py-2 px-2 justify-content-center align-items-center">
      <p className="text-light">We Will Be At Dubai GITEX 2022 - World’s Largest Tech Conference</p>
      <a
        href={"https://calendly.com/zameelk/30min"}
        target="_blank"
        className="btn-white-line"
        rel="noreferrer"
      >
        {"Book Meeting"}
      </a>
    </div>
  );
};

export default ConnectHeader;
