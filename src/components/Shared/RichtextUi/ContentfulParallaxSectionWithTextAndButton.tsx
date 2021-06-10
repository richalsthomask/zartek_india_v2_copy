import { InlineButton } from "@/components/Helpers/Buttons";
import React, { FC } from "react";

interface ContentfulParallaxSectionWithTextAndButtonProps {
  text: string;
  button: {
    title: string;
    link: string;
  };
}

export const ContentfulParallaxSectionWithTextAndButton: FC<ContentfulParallaxSectionWithTextAndButtonProps> =
  ({ button, text }) => {
    return (
      <section className="parallax">
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="info">
                  <p className="pre-line-text">{text}</p>
                  <InlineButton color="white" link={button.link} title={button.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
