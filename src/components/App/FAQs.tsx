import { FAQType } from "@/@types/types";
import React, { FC } from "react";
import { Accordian } from "../Helpers/Accordian";

interface FrequentlyAskedQuestionsProps {
  faQs: FAQType[];
}

export const FrequentlyAskedQuestions: FC<FrequentlyAskedQuestionsProps> = ({ faQs }) => {
  return (
    <section className="section background  faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>

            <Accordian accordians={faQs} />
          </div>
        </div>
      </div>
    </section>
  );
};
