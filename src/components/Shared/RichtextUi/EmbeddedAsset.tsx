import { LazyImage } from "@/components/Helpers/LazyImage";
import { Block, Inline } from "@contentful/rich-text-types";
import React, { FC } from "react";

interface EmbeddedAssetUiProps {
  node: Block | Inline;
  references: any[];
}

export const EmbeddedAssetBlockImageUi: FC<EmbeddedAssetUiProps> = ({ node, references }) => {
  const assetId = node?.data?.target?.sys?.id;

  const { file } = references?.find((each) => each.contentful_id === assetId);
  if (!file.hasOwnProperty("url")) {
    return null;
  }

  return (
    <div className="blogs-details-image">
      <LazyImage
        height={500}
        src={file?.url}
        alt={"blog-asset-missing"}
        width={400}
        classNameExtra={"blog-image"}
      />
    </div>
  );
};
