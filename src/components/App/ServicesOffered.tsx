import { ServiceAreaModelType } from "@/@types/types";
import { Link } from "gatsby";
import React, { FC } from "react";
import { ServiceInfoCard } from "../Shared/Ui/ServiceInfoCard";

interface ServicesOfferedProps {
  serviceProp: ServiceAreaModelType;
}

export const ServicesOffered: FC<ServicesOfferedProps> = ({
  serviceProp: { title, description, services },
}) => {
  return (
    <section className="section services-section pbottom-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-bottom">
            <div className="left-heading">
              <h2 className="section-title">{title}</h2>
            </div>
            <div className="left-text">
              <p className="dark pre-line-text">{description.description}</p>
            </div>
            <Link to={services[0].routerLink} className="btn-primary-line">
              SERVICES
            </Link>
          </div>

          <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-bottom">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <ServiceInfoCard
                  cardAdditionalClass="mtop-70"
                  cardDescription={services[0].description}
                  cardIcon={services[0].icon}
                  cardTitle={services[0].title}
                  routerLink={services[0].routerLink}
                />
                <ServiceInfoCard
                  cardDescription={services[1].description}
                  cardIcon={services[1].icon}
                  cardTitle={services[1].title}
                  routerLink={services[1].routerLink}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <ServiceInfoCard
                  cardAdditionalClass="active"
                  cardDescription={services[2].description}
                  cardIcon={services[2].icon}
                  cardTitle={services[2].title}
                  routerLink={services[2].routerLink}
                />
                <ServiceInfoCard
                  cardDescription={services[3].description}
                  cardIcon={services[3].icon}
                  cardTitle={services[3].title}
                  routerLink={services[3].routerLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
