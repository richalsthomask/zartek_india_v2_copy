import { onBoardedClient } from "@/@types/types";
import React, { FC } from "react";

const OnBoardedClients: FC<{ clients: onBoardedClient[] }> = ({ clients }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h3 className="section-title">Our Clients</h3>
          </div>
        </div>
      </div>
      <div className="row">
        {clients.map((client) => {
          return (
            <div className="col-md-3 col-6 mb-4 p-1" key={client.id}>
              <img
                src={client.clientBrandLogo.file.url}
                alt="..."
                style={{ margin: "auto", height: "80px", width: "100%", objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnBoardedClients;
