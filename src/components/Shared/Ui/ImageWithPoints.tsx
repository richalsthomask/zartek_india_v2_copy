import { BulletPoint } from "@/@types/types";
import { LazyImage } from "@/components/Helpers/LazyImage";
import React, { FC } from "react";
import { BulletPointsWithOrder } from "./BulletPointsWIthOrder";

interface ImageWithPointsUiProps {
  direction: "left-image-right-points" | "right-image-left-points";
  points: BulletPoint[];
  imageSrc: string;
}

export const ImageWithPointsUi: FC<ImageWithPointsUiProps> = ({ direction, points, imageSrc }) => {
  return (
    <div className="container">
      <div
        className={`row ${
          direction === "right-image-left-points" ? "reverse-flex-row" : "flex-row-dir"
        }`}
      >
        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center">
          <LazyImage
            alt="points-rel-image"
            src={imageSrc}
            height={600}
            width={300}
            classNameExtra="img-fluid image-withpoints "
          />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 align-self-center">
          <ul className="features">
            {points.map(({ description, title, id }, index) => {
              return (
                <BulletPointsWithOrder
                  count={index + 1}
                  title={title}
                  description={description.description}
                  key={id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
