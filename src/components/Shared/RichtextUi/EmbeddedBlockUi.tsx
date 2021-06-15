import { Block, Inline } from "@contentful/rich-text-types";
import React, { FC } from "react";
import { BulletPointsWithOrder } from "../Ui/BulletPointsWIthOrder";
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

  console.log(entryAssetDocument);

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

  if (entryAssetDocument?.__typename === "ContentfulBulletPointsListRichTextEditorModel") {
    return (
      <ul className="features">
        {entryAssetDocument?.points?.map(({ id, description: { description }, title }, index) => {
          return (
            <BulletPointsWithOrder
              description={description}
              count={index + 1}
              key={id}
              title={title}
            />
          );
        })}
      </ul>
    );
  }
  return <p>view missing</p>;
};
