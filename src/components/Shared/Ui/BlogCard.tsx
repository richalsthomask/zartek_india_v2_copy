import { Link } from "gatsby";
import React, { FC } from "react";

interface BlogCardProps {
  size: "large" | "small";
  imrSrc: string;
  publishedDate: Date;
  slug: string;
  title: string;
  shortDescription: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  size,
  imrSrc,
  publishedDate,
  slug,
  shortDescription,
  title,
}) => {
  return (
    <div
      className={`col-md-6 col-sm-12 blog-card blog-post-thumb ${size === "large" ? " big" : ""} ${
        size === "large" ? "col-lg-6" : "col-lg-4"
      }`}
    >
      <div className="img">
        <img src={imrSrc} alt="blogcard" />
        <div className="date">
          <strong>{new Date(publishedDate).toString().split(" ")[1]}</strong>
          <span>{new Date(publishedDate).toString().split(" ")[2]}</span>
          <span>{new Date(publishedDate).toString().split(" ")[3]}</span>
        </div>
      </div>
      <ul className="post-meta">
        <li>
          <p>
            <span className="icon fa fa-user"></span>
            by {"Zartek"}
          </p>
        </li>
      </ul>
      <h3>
        <Link to={`/${slug}`}>{title}</Link>
      </h3>
      <div className="text">{shortDescription}</div>
      <Link to={`/${slug}`} className="btn-primary-line">
        Read More
      </Link>
    </div>
  );
};
