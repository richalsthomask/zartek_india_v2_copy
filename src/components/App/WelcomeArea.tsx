import { WelcomeAreaPropType } from "@/@types/types";
import { ContactLinkButton, InlineButton } from "@/components/Helpers/Buttons";
import React, { Component } from "react";
import { AppletUi } from "../Shared/Ui/AppletUi";

interface WelcomeAreaProps {
  welcomeArea: WelcomeAreaPropType;
}

export class WelcomeArea extends Component<WelcomeAreaProps> {
  render(): JSX.Element {
    const { applets, description, option1, option2, title } = this.props.welcomeArea;

    return (
      <section className="welcome-area">
        <div className="welcome-bg" />
        <div className="welcome-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
                <h1>{title} </h1>
                <p>{description.description}</p>
                <InlineButton color="white" link={option1.link} title={option1.title} />
                <br />
                <ContactLinkButton color="white" link={option2.link} title={option2.title} />
              </div>
              <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12 col-xs-12 align-self-center">
                <div className="apps">
                  <div className="container-fluid">
                    <div className="row">
                      {applets?.map(({ appIcon, appTitle, redirectLink, id }) => {
                        return (
                          <AppletUi
                            key={id}
                            appIcon={appIcon}
                            appTitle={appTitle}
                            redirectLink={redirectLink || "/our-work/"}
                            viewPort="0.0"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
