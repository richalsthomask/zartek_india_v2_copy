import { ParallaxStatPodType } from "@/@types/types";
import React, { FC } from "react";
import { CountUp } from "../Helpers/CountUp";

export const Stats: FC<{ stats: ParallaxStatPodType[] }> = ({ stats }) => {
  return (
    <section className="parallax">
      <div className="parallax-content">
        <div className="container">
          <div className="row">
            {stats.map(({ id, title, description }) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
                  <div className="count-item">
                    <CountUp count={Number(title)} />
                    <span className="pre-line-text">{description.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
