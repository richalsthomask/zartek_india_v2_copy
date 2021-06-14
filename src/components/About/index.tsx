import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React, { Component } from "react";
import { Layout } from "../Layout";
import { Breadcrumb } from "../Shared/Breadcrumb";
import { EmbeddedBlockUi } from "../Shared/RichtextUi/EmbeddedBlockUi";
import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
  HeadingTwo,
} from "../Shared/RichtextUi/Headings";

interface AboutUsProps {
  aboutUsContent: {
    raw: any;
    references: any[];
  };
}

export default class AboutUs extends Component<AboutUsProps> {
  private provideOptions(): Options {
    const options: Options = {
      renderNode: {
        [BLOCKS.DOCUMENT]: (node, children) => (
          <div className="page-bottom pb-0">
            <div className="container">{children}</div>
          </div>
        ),
        [BLOCKS.HEADING_1]: (_, children) => <HeadingOne heading={children} />,
        [BLOCKS.HEADING_2]: (_, children) => <HeadingTwo heading={children} />,
        [BLOCKS.HEADING_3]: (_, children) => <HeadingThree heading={children} />,
        [BLOCKS.HEADING_4]: (_, children) => <HeadingFour heading={children} />,
        [BLOCKS.HEADING_5]: (_, children) => <HeadingFive heading={children} />,
        [BLOCKS.HEADING_6]: (_, children) => <HeadingSix heading={children} />,
        "embedded-entry-block": (node) => (
          <EmbeddedBlockUi node={node} references={this.props.aboutUsContent.references} />
        ),
      },
    };
    return options;
  }

  render(): JSX.Element {
    const { aboutUsContent } = this.props;

    return (
      <Layout>
        <Breadcrumb
          currentPageTitle="About Us"
          routes={[
            { path: "/", title: "Home" },
            { path: "/about/", title: "About us" },
          ]}
        />

        {documentToReactComponents(JSON.parse(aboutUsContent.raw), this.provideOptions())}
      </Layout>
    );
  }
}
