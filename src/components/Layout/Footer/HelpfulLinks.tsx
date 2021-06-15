import { Link } from "gatsby";
import React, { FC } from "react";

export const HelpfulLinks: FC<{ baseURL: string }> = ({ baseURL }) => {
  return (
    <ul className="footer-nav">
      {helpfulLinksRoutes.map(({ path, title, addBaseURl }) => {
        return (
          <li key={title}>
            <Link to={addBaseURl ? baseURL + path : path}>
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
    addBaseURl: true,
  },
  {
    title: "About Us",
    path: "/about/",
    addBaseURl: true,
  },
  {
    title: "Services",
    path: "/services/",
    addBaseURl: true,
  },
  {
    title: "Training",
    path: "/flutter-course-kochi/",
    addBaseURl: false,
  },
  {
    title: "Careers",
    path: "/careers/",
    addBaseURl: false,
  },
  {
    title: "Dedicated devs",
    path: "/hire-dedicated-developer/",
    addBaseURl: true,
  },
  {
    title: "Partner with us",
    path: "/partner-with-us/",
    addBaseURl: true,
  },
];
