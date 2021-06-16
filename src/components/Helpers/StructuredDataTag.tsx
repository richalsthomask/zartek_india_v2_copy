import { StructuredDataSnippet } from "@/@types/types";
import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface StructuredDataSnippetTagProps {
  snippets: StructuredDataSnippet[];
}

export const StructuredDataSnippetTag: FC<StructuredDataSnippetTagProps> = ({ snippets }) => {
  return (
    <React.Fragment>
      {snippets?.length && (
        <Helmet>
          {snippets.map(({ snippet: { snippet, id } }) => {
            return (
              <script type="application/ld+json" key={id}>
                {Object.freeze(snippet)}
              </script>
            );
          })}
        </Helmet>
      )}
    </React.Fragment>
  );
};
