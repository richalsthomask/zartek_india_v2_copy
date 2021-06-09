import React from "react";
import "./style.css";

interface EllipsisLoaderProps {
  width: string | number | undefined;
  height: string | number | undefined;
}

export function EllipsisLoader({ height, width }: EllipsisLoaderProps): JSX.Element {
  return (
    <div className="lds-ellipsis" style={{ width, height }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
