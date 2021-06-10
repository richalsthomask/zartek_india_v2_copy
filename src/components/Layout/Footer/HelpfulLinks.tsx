import { Link } from "gatsby";
import React, { FC } from "react";

export const HelpfulLinks: FC<{ baseURL: string }> = ({ baseURL }) => {
  return (
    <ul className="footer-nav">
      {helpfulLinksRoutes.map(({ path, title }) => {
        return (
          <li key={title}>
            <Link to={baseURL + path}>
              <i className="fa fa-angle-right"></i>
              <span>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const helpfulLinksRoutes = [
  {
    title: "Our Work",
    path: "/our-work/",
  },
  {
    title: "About Us",
    path: "/about/",
  },
  {
    title: "Services",
    path: "/services/",
  },
  {
    title: "Training",
    path: "/flutter-course-kochi/",
  },
  {
    title: "Careers",
    path: "/careers/",
  },
  {
    title: "Dedicated devs",
    path: "/hire-dedicated-developer/",
  },
  {
    title: "Partner with us",
    path: "/partner-with-us/",
  },
];
