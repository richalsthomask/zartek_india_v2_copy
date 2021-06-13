import { graphql } from "gatsby";
import React, { Component } from "react";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPostModel(slug: { eq: $slug }) {
      id
      title
      slug
      metaTitle
      metaDescription
      keywords
      author
      cover {
        file {
          url
        }
      }

      body {
        raw
      }
    }
  }
`;

export default class BlogDetail extends Component {
  render(): JSX.Element {
    console.log(this.props);
    return <h1>Blog detail</h1>;
  }
}
