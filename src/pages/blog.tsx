import BlogList from "@/components/Blog";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_BLOGS_LIST_KOCHI {
          contentfulBlogsPage(use: { eq: "Use This space to access Blogs Page - Kochi" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            blogsList {
              id
              publishedDate
              author
              cover {
                file {
                  url
                }
              }
              title
              slug
              shortDescription
            }
          }
        }
      `}
      render={({ contentfulBlogsPage: { blogsList, seo } }) => (
        <BlogList blogs={blogsList} seo={seo} />
      )}
    />
  );
};

export default Blog;
