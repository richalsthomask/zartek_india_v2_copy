import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { Link } from "gatsby";
import React, { FC } from "react";

interface BreadcrumbProps {
  currentPageTitle: string;
  routes: { title: string; path: string }[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ currentPageTitle, routes }) => {
  const url = useBaseURL();

  return (
    <div className="cover bread-crumb-cover">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{currentPageTitle}</h1>
            </div>
            <div className="col-lg-12">
              <ol className="breadcrumb">
                {routes.map(({ path, title }, i) => (
                  <li key={i}>
                    <Link activeClassName="active" to={url + path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
