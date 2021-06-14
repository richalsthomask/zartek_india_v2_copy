import React from "react";
import { Helmet } from "react-helmet";

export interface SEOType {
  metaTitle: string;
  metaUrl: string;
  metaAuthor?: string;
  metaKeywords: string[];
  metaDescription: string;
}

interface SEOProps {
  contentfulSeo: {
    metaDescription: string;
    metaTitle: string;
    metaUrl: string;
    metaAuthor?: string;
    metaKeywords: string[];
  };
}

export default function SEO({ contentfulSeo }: SEOProps): JSX.Element {
  if (!contentfulSeo) {
    return null;
  }
  const metaDescription = contentfulSeo.metaDescription;
  const metaTitle = contentfulSeo.metaTitle;
  const metaUrl = contentfulSeo.metaUrl;
  const metaAuthor = contentfulSeo.metaAuthor || "@Zartek";
  const metaKeywords = contentfulSeo.metaKeywords;
  return (
    // constants for holding metadata!
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "robots",
          content: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        },
        // Open Graph data
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content:
            "https://images.ctfassets.net/xhs8vi1fxo4s/2gXyFCk3mJWWg5UPmLTbYn/b2f02f1e428080d95ea522e16bc3de03/logo.png?w=800&q=50",
        },
        {
          property: "og:image:secure_url",
          content:
            "https://images.ctfassets.net/xhs8vi1fxo4s/2gXyFCk3mJWWg5UPmLTbYn/b2f02f1e428080d95ea522e16bc3de03/logo.png?w=800&q=50",
        },
        {
          property: "og:image:width",
          content: "626",
        },
        {
          property: "og:image:height",
          content: "417",
        },
        {
          property: "og:image:alt",
          content: "zartek technologies",
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
        {
          property: "og:url",
          content: metaUrl,
        },

        // Twitter Card data
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:title",
          content: metaTitle,
        },
        {
          property: "twitter:description",
          content: metaDescription,
        },
        {
          property: "twitter:creator",
          content: metaAuthor,
        },
        {
          property: "twitter:image",
          content:
            "https://images.ctfassets.net/xhs8vi1fxo4s/2gXyFCk3mJWWg5UPmLTbYn/b2f02f1e428080d95ea522e16bc3de03/logo.png?w=800&q=50",
        },
        { name: "twitter:site", content: "@zartekq" },
        // Google+
        {
          itemprop: "name",
          content: metaTitle,
        },
        {
          itemprop: "description",
          content: metaDescription,
        },
        {
          itemprop: "image",
          content:
            "https://images.ctfassets.net/xhs8vi1fxo4s/2gXyFCk3mJWWg5UPmLTbYn/b2f02f1e428080d95ea522e16bc3de03/logo.png?w=800&q=50",
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: "keywords",
              content: metaKeywords.join(", "),
            }
          : [],
      )}
    />
  );
}
