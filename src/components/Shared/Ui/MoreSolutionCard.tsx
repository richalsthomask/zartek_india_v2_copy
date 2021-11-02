import { Link } from "gatsby";
import React, { FC } from "react";

interface MoreSolutionCardProps {
  title: string;
  shortDescription: string;
  coverImage: string;
  slug: string;
}

const MoreSolutionCard: FC<MoreSolutionCardProps> = ({
  coverImage,
  shortDescription,
  title,
  slug,
}) => {
  return (
    <div className={`p-3 blog-card blog-post-thumb`}>
      <div className="img">
        <img src={coverImage} alt="blogcard" className="img" />
      </div>

      <h3>
        <Link to={`/${slug}`}>{title}</Link>
      </h3>
      <div className="text">{shortDescription}</div>
      <Link to={`/${slug}`} className="btn-primary-line m-auto">
        Read More
      </Link>
    </div>
  );
};

export default MoreSolutionCard;
