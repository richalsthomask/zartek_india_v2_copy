import { FAQType } from "@/@types/types";
import React, { FC, useState } from "react";

interface AccordianProps {
  accordians: FAQType[];
}

export const Accordian: FC<AccordianProps> = ({ accordians }) => {
  const [selectedAccordian, setSelectedAccordian] = useState<string | null>(null);

  function activateAccordian(id: string) {
    if (id === selectedAccordian) {
      setSelectedAccordian(null);
    } else {
      setSelectedAccordian(id);
    }
  }

  return (
    <React.Fragment>
      {accordians.map(({ answer, question, id }) => {
        return (
          <div role="button" className="accordion mb-3" key={id}>
            <div className="accordion-item">
              <button
                id="accordion-button-1"
                onClick={() => activateAccordian(id)}
                aria-expanded={selectedAccordian === id}
              >
                <span className="accordion-title">{question}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div className="accordion-content pt-2 pb-2">{answer.answer}</div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
