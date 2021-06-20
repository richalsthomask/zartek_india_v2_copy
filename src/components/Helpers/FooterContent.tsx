import {
  HeadingFive,
  HeadingFour,
  HeadingOne,
  HeadingSix,
  HeadingThree,
} from "@/components/Shared/RichtextUi/Headings";
import { UnorderedListRT } from "@/components/Shared/RichtextUi/UnOrderedList";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import React, { Component } from "react";

interface FooterContentUiProps {
  content: any;
}

export default class FooterContentUi extends Component<FooterContentUiProps> {
  private provideOptions(): Options {
    const options: Options = {
      renderNode: {
        [BLOCKS.DOCUMENT]: (node, children) => <div>{children}</div>,
        [BLOCKS.HEADING_1]: (_, children) => <HeadingOne heading={children} />,
        [BLOCKS.HEADING_2]: (_, children) => <h2 className="section-title footer">{children}</h2>,
        [BLOCKS.HEADING_3]: (_, children) => <HeadingThree heading={children} />,
        [BLOCKS.HEADING_4]: (_, children) => <HeadingFour heading={children} />,
        [BLOCKS.HEADING_5]: (_, children) => <HeadingFive heading={children} />,
        [BLOCKS.HEADING_6]: (_, children) => <HeadingSix heading={children} />,
        [BLOCKS.UL_LIST]: (_, children) => <UnorderedListRT list={children} />,
      },
    };
    return options;
  }

  render(): JSX.Element {
    return (
      <div className="container pb-5 pt-0 footer-content">
        {documentToReactComponents(JSON.parse(this.props.content), this.provideOptions())}
      </div>
    );
  }
}
