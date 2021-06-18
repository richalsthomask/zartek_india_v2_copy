import { graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";
import { BlogCard } from "../Shared/Ui/BlogCard";

export const LatestBlogs: FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query LATEST_THREE_BLOGS {
          allContentfulBlogPostModel(sort: { fields: publishedDate, order: DESC }, limit: 3) {
            nodes {
              id
              title
              slug
              shortDescription
              cover {
                file {
                  url
                }
              }
              publishedDate
            }
          }
        }
      `}
      render={({ allContentfulBlogPostModel: { nodes } }) => (
        <div className="grey-bg">
          <div className="container blogs-container ">
            <div className="blog-list">
              <div className="row">
                {nodes.map(({ cover, shortDescription, slug, title, publishedDate, id }, index) => {
                  return (
                    <BlogCard
                      imrSrc={cover.file.url}
                      publishedDate={publishedDate}
                      key={id}
                      shortDescription={shortDescription}
                      size={"small"}
                      slug={slug}
                      title={title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
