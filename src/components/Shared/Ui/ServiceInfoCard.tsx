import { LazyImage } from "@/components/Helpers/LazyImage";
import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { Link } from "gatsby";
import React, { FC } from "react";

interface ServiceInfoCardProps {
  routerLink: string;
  cardTitle: string;
  cardDescription: string;
  cardIcon: { file: { url: string } };
  cardAdditionalClass?: string;
  addBaseURL?: boolean;
}

export const ServiceInfoCard: FC<ServiceInfoCardProps> = ({
  cardDescription,
  cardIcon,
  cardTitle,
  routerLink,
  cardAdditionalClass = "",
  addBaseURL = false,
}) => {
  const baseURL = useBaseURL();

  const InnerContent = () => {
    return (
      <React.Fragment>
        <LazyImage src={cardIcon.file.url} height={32} width={32} alt="service-card-icon" />
        <h5 className="services-title">{cardTitle}</h5>
        <p>{cardDescription}</p>
      </React.Fragment>
    );
  };

  if (routerLink?.includes("http")) {
    return (
      <Link to={routerLink} className={"home-services-item " + cardAdditionalClass}>
        <InnerContent />
      </Link>
    );
  }

  return (
    <Link
      to={addBaseURL ? baseURL + routerLink : routerLink}
      className={"home-services-item " + cardAdditionalClass}
    >
      <InnerContent />
    </Link>
  );
};
