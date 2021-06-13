import { FileType } from "@/@types/types";
import { Layout } from "@/components/Layout";
import { Breadcrumb } from "@/components/Shared/Breadcrumb";
import { BlogCard } from "@/components/Shared/Ui/BlogCard";
import React, { Component } from "react";

interface BlogListProps {
  blogs: {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    cover: FileType;
    publishedDate: Date;
  }[];
}

export default class Blog extends Component<BlogListProps> {
  render(): JSX.Element {
    const { blogs } = this.props;

    return (
      <Layout>
        <Breadcrumb
          currentPageTitle="Blogs"
          routes={[
            { path: "/", title: "Home" },
            { path: "/blog/", title: "Blogs" },
          ]}
        />
        <div className="page-bottom pbottom-70">
          <div className="container blogs-container">
            <div className="row">
              <div className="blog-list">
                <div className="row">
                  {blogs.map(
                    ({ cover, shortDescription, slug, title, publishedDate, id }, index) => {
                      return (
                        <BlogCard
                          imrSrc={cover.file.url}
                          publishedDate={publishedDate}
                          key={id}
                          shortDescription={shortDescription}
                          size={index === 0 || index === 1 ? "large" : "small"}
                          slug={slug}
                          title={title}
                        />
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
