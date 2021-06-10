import { AppletType } from "@/@types/types";
import { LazyImage } from "@/components/Helpers/LazyImage";
import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { Link } from "gatsby";
import React, { FC } from "react";

export const AppletUi: FC<AppletType> = ({
  appIcon: {
    file: { url },
  },
  redirectLink,
  appTitle,
}) => {
  const baseUrl = useBaseURL();

  return (
    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
      {redirectLink.includes("https") ? (
        <a href={redirectLink} target="_blank" className="app-item" rel="noreferrer">
          <div className="icon">
            <LazyImage alt={appTitle} height={65} width={65} src={url} view="1.0" />
          </div>
        </a>
      ) : (
        <Link to={baseUrl + redirectLink} className="app-item">
          <div className="icon">
            <LazyImage alt={appTitle} height={65} width={65} src={url} view="1.0" />
          </div>
        </Link>
      )}
    </div>
  );
};
