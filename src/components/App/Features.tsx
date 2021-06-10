import { BulletPointsWithImageType } from "@/@types/types";
import React, { FC } from "react";
import { ImageWithPointsUi } from "../Shared/Ui/ImageWithPoints";

interface FeaturesProps {
  features: BulletPointsWithImageType;
}

export const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="section background">
      <ImageWithPointsUi
        direction={features.position}
        points={features.points}
        imageSrc={features.image.file.url}
      />
    </section>
  );
};
