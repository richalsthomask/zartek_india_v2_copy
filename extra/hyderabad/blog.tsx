import BlogList from "@/components/Blog";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_BLOGS_LIST_HYDERABAD {
          contentfulBlogsPage(use: { eq: "Use This space to access Blogs Page - Hyderabad" }) {
            seo {
              metaTitle
              metaDescription
              metaUrl
              metaAuthor
              metaKeywords
            }
            blogs {
              posts {
                id
                publishedDate
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
        }
      `}
      render={({
        contentfulBlogsPage: {
          blogs: { posts },
          seo,
        },
      }) => <BlogList blogs={posts} seo={seo} />}
    />
  );
};

export default Blog;
