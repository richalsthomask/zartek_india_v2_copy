import React, { FC } from "react";

interface ContentfulPillarImageWithScaleToZoomRtModelProps {
  images: { file: { url: string } }[];
}

export const ContentfulPillarImageWithScaleToZoomRtModel: FC<
  ContentfulPillarImageWithScaleToZoomRtModelProps
> = ({ images }) => {
  return (
    <div className="row page-gallery-wrapper">
      <div className="images-container">
        {images.map(({ file }, i) => {
          return (
            <div className={`img-${i + 1}`} key={i}>
              <img src={file.url} alt="office" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
