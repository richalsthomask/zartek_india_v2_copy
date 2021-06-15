import { Block, Inline } from "@contentful/rich-text-types";
import React, { FC } from "react";
import { BulletPointsWithOrder } from "../Ui/BulletPointsWIthOrder";
import { FrequentlyAskedQuestions } from "../Ui/FAQs";
import { ContentfulParallaxSectionWithTextAndButton } from "./ContentfulParallaxSectionWithTextAndButton";
import { ContentfulPillarImageWithScaleToZoomRtModel } from "./ContentfulPillarImageWithScaleToZoomRtModel";
import { ContentfulQuoteUI } from "./ContentfulQuoteUi";
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
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-self-center">
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
      </div>
    );
  }
  if (entryAssetDocument?.__typename === "ContentfulQuoteRtModel") {
    const {
      by,
      quote: { quote },
    } = entryAssetDocument;
    return <ContentfulQuoteUI by={by} quote={quote} />;
  }

  if (entryAssetDocument?.__typename === "ContentfulFaQsListModel") {
    return <FrequentlyAskedQuestions faQs={entryAssetDocument.faqItem} />;
  }

  console.log(entryAssetDocument);
  return <p>view missing</p>;
};
