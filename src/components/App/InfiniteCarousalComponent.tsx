import React from "react";
import { partners } from "@/data/partners";
import InfiniteCarousal from "../InfiniteCarousal";

export default function InfiniteCarousalComponent({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <div className="section pbottom-70">
      <div className=" row">
        <div className="col-lg-12">
          <div className="center-heading">
            <h3 className="section-title">Partners</h3>
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: "1300px", gap: "30px" }}
        className="px-sm-4 px-lg-5 d-flex flex-column mx-auto"
      >
        <InfiniteCarousal items={partners.slice(0, 5)} className={className} />
        <InfiniteCarousal items={partners.slice(5, 11)} className={className} direction={"RIGHT"} />
      </div>
    </div>
  );
}
