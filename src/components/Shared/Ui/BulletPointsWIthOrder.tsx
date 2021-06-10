import React, { FC } from "react";

interface BulletPointsWithOrderProps {
  count: number;
  title: string;
  description: string;
}

export const BulletPointsWithOrder: FC<BulletPointsWithOrderProps> = ({
  count,
  title,
  description,
}) => {
  return (
    <li>
      <div className="count">
        <span>{count}</span>
      </div>
      <div className="text">
        <h5 className="title">{title}</h5>
        <p className="pre-line-text">{description}</p>
      </div>
    </li>
  );
};
