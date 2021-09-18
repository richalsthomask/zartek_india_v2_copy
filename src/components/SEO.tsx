import React from "react";
import { Helmet } from "react-helmet";

export interface SEOType {
  metaTitle: string;
  metaUrl: string;
  metaAuthor?: string;
  metaKeywords: string[];
  metaDescription: string;
  metaImage?: string;
}

interface SEOProps {
  contentfulSeo: {
    metaDescription: string;
    metaTitle: string;
    metaUrl: string;
    metaAuthor?: string;
    metaKeywords: string[];
    metaImage?: string;
  };
}

export default function SEO({ contentfulSeo }: SEOProps): JSX.Element {
  if (!contentfulSeo) {
    return null;
  }

  const { metaDescription, metaKeywords, metaTitle, metaUrl, metaAuthor, metaImage } =
    contentfulSeo;
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
          name: "image",
          property: "og:image",
          content: metaImage || "https://zartek.in/icons/icon-48x48.png",
        },
        {
          property: "og:image:secure_url",
          content: metaImage || "https://zartek.in/icons/icon-48x48.png",
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
          content: metaAuthor || "@Zartek",
        },
        {
          name: "author",
          content: metaAuthor || "@Zartek",
        },
        {
          property: "twitter:image",
          content: metaImage || "https://zartek-india-v2.netlify.app/icons/icon-48x48.png",
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
          content: metaImage || "https://zartek-india-v2.netlify.app/icons/icon-48x48.png",
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
