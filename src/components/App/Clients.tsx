import { onBoardedClient } from "@/@types/types";
import React, { FC } from "react";

const OnBoardedClients: FC<{ clients: onBoardedClient[] }> = ({ clients }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h3 className="section-title">Clients</h3>
          </div>
        </div>
        <div className="offset-lg-3 col-lg-12 m-auto">
          <div className="center-text">
            <p>Professionals of following notable companies have availed our services.</p>
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
