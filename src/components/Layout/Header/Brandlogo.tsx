import { Link } from "gatsby";
import React, { FC } from "react";

interface BrandLogoProps {
  logoMode: "dark" | "light";
  homeURL: string;
}

export const BrandLogo: FC<BrandLogoProps> = ({ logoMode, homeURL }) => {
  return (
    <Link to={homeURL} className="logo">
      <img
        src={logoMode === "light" ? "/images/logo-dark.png" : "/images/logo-white.png"}
        alt="Zartek Technologies"
      />
    </Link>
  );
};
