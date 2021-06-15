import React, { FC } from "react";

interface ContentfulQuoteProps {
  quote: string;
  by: string;
}

export const ContentfulQuoteUI: FC<ContentfulQuoteProps> = ({ by, quote }) => {
  return (
    <blockquote>
      <div className="text">
        <p className="text-pre-line">{quote}</p>
      </div>
      <div className="author">{by}</div>
    </blockquote>
  );
};
