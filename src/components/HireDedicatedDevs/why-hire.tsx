import React from "react";

const HireDedicatedDevelopersWhyHire: React.FC<{
  title: string;
  cards: {
    id: string;
    icon: {
      file: {
        url: string;
      };
    };
    title: string;
    description: string;
  }[];
}> = ({ cards, title }) => {
  return (
    <div id="dedicated_developers">
      <div className="container my-5">
        <div className="col-12">
          <h2 className="text-center">{title}</h2>
        </div>
        <div className="row cols-3 cols-lg-3 mt-4">
          {cards.map((card) => {
            return (
              <div className="col-lg-4 col-12 mb-3" key={card.id}>
                <div className="p-3 dedicated_developers-box rounded-2">
                  <div className="services-icon-1">
                    <img src={card.icon.file.url} alt="..." className="img-fluid" />
                  </div>
                  <h5 className="py-3 mb-0">{card.title}</h5>
                  <p className="text-center text-black-50 mb-0">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HireDedicatedDevelopersWhyHire;
