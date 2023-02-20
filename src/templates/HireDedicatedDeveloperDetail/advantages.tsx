import React from "react";

interface AdvantagesProps {
  data: {
    id: string;
    icon: {
      file: {
        url: string;
      };
    };
    title: string;
  }[];
}

const Advantages: React.FC<AdvantagesProps> = ({ data }) => {
  return (
    <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3 mt-4">
      {[...data].map((each) => {
        return (
          <div key={each.id} className="col-lg-4 col-sm-6 col-12 mb-4">
            <div className="p-4 dedicated_developers-box rounded-2">
              <div className="flutterservices-icon-1" style={{ padding: "22px" }}>
                <img src={each.icon.file.url} alt="..." className="img-fluid" />
              </div>
              <h5 className="py-3 mb-0 text-center mt-3">{each.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Advantages;
