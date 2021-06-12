import { Block, Inline } from "@contentful/rich-text-types";
import React, { FC } from "react";
import { ContentfulParallaxSectionWithTextAndButton } from "./ContentfulParallaxSectionWithTextAndButton";
import { ContentfulPillarImageWithScaleToZoomRtModel } from "./ContentfulPillarImageWithScaleToZoomRtModel";
import { ContentfulTeamListModelRt } from "./ContentfulTeamListModelRt";

interface EmbeddedBlockUiProps {
  node: Block | Inline;
  references: any[];
}

export const EmbeddedBlockUi: FC<EmbeddedBlockUiProps> = ({ node, references }) => {
  const assetId = node?.data?.target?.sys?.id;

  if (!assetId) return null;

  const entryAssetDocument = references?.find((each) => each?.contentful_id === assetId) || null;

  if (!entryAssetDocument) {
    return null;
  }

  // console.log(entryAssetDocument);

  if (entryAssetDocument?.__typename === "ContentfulPillarImageWithScaleToZoomRtModel") {
    return <ContentfulPillarImageWithScaleToZoomRtModel images={entryAssetDocument.images} />;
  }

  if (entryAssetDocument?.__typename === "ContentfulParallaxSectionWithTextAndButton") {
    return (
      <ContentfulParallaxSectionWithTextAndButton
        button={entryAssetDocument.button}
        text={entryAssetDocument.text.text}
      />
    );
  }

  if (entryAssetDocument?.__typename === "ContentfulTeamListModelRt") {
    return <ContentfulTeamListModelRt teamMembers={entryAssetDocument.teamMembers} />;
  }
  return <p>view missing</p>;
};
