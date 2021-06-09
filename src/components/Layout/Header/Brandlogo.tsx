import { Link } from "gatsby";
import React, { FC } from "react";

interface BrandLogoProps {
  logoMode: "dark" | "light";
}

export const BrandLogo: FC<BrandLogoProps> = ({ logoMode }) => {
  return (
    <Link to="/" className="logo">
      <img
        src={logoMode === "light" ? "/images/logo-dark.png" : "/images/logo-white.png"}
        className={logoMode === "light" ? "light-logo" : "dark-logo"}
        alt="Zartek Technologies"
      />
    </Link>
  );
};
