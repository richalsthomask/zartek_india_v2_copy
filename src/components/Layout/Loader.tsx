import React, { FC, useEffect, useState } from "react";

export const Loader: FC = () => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setShow(false);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="loader-wrapper">
      <div className="center">
        <div className="dot dot-one"></div>
        <div className="dot dot-two"></div>
        <div className="dot dot-three"></div>
        <div className="dot dot-four"></div>
        <div className="dot dot-five"></div>
      </div>
    </div>
  );
};
