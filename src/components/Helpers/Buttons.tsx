import { ButtonType } from "@/@types/types";
import { Link } from "gatsby";
import React, { FC } from "react";

export const InlineButton: FC<ButtonType> = ({ link, title, color }) => {
  return (
    <Link className={`btn-${color}-line`} to={link}>
      {title}
    </Link>
  );
};

export const ContactLinkButton: FC<ButtonType> = ({ link, title, color }) => {
  return (
    <a className={`btn-${color}-line`} href={`tel:${link}`} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
};
