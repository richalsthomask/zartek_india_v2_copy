import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { BlogCard } from "../Shared/Ui/BlogCard";

export const LatestBlogs: React.FC = () => {
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
              author
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
        <div className="grey-bg pt-4">
          <div className="container blogs-container ">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Zartek Blog Posts</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>Read our experience and insights on how right products are built</p>
                </div>
              </div>
            </div>
            <div className="blog-list">
              <div className="row">
                {nodes.map(
                  ({ cover, shortDescription, slug, title, publishedDate, id, author }, index) => {
                    return (
                      <BlogCard
                        imrSrc={cover.file.url}
                        publishedDate={publishedDate}
                        key={id}
                        shortDescription={shortDescription}
                        size={"small"}
                        slug={slug}
                        title={title}
                        author={author}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
