import BlogList from "@/components/Blog";
import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";

const Blog: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query GET_BLOGS_LIST_PUNE {
          contentfulBlogsPage(use: { eq: "Use This space to access Blogs Page - Pune" }) {
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
        },
      }) => <BlogList blogs={posts} />}
    />
  );
};

export default Blog;
