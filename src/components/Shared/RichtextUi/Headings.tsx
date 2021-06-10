import React, { FC, ReactNode } from "react";

export const HeadingOne: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h1>{heading}</h1>
    </div>
  );
};

export const HeadingTwo: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h2>{heading}</h2>
    </div>
  );
};

export const HeadingThree: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h3>{heading}</h3>
    </div>
  );
};

export const HeadingFour: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h4>{heading}</h4>
    </div>
  );
};

export const HeadingFive: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h5>{heading}</h5>
    </div>
  );
};

export const HeadingSix: FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="col-xl-9 pt-2 pb-1">
      <h6>{heading}</h6>
    </div>
  );
};
