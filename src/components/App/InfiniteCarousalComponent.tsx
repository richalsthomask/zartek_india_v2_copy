import React, { useEffect, useState } from "react";
import { partners } from "@/data/partners";

function InfiniteCarousal({
  items,
  className,
  direction = "LEFT",
}: InfiniteCarousalProps): JSX.Element {
  const [scrollX, setScrollX] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);
  const [width, setWidth] = useState(0);
  const cardWidth = width > 768 ? 300 : 200;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((scrollX) => scrollX + (direction === "LEFT" ? -10 : 10));
    }, 150);
    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (
      direction === "LEFT"
        ? scrollX <= -cardWidth * items.length - (30 * items.length - 1)
        : scrollX >= cardWidth * items.length + (30 * items.length - 1)
    ) {
      setResetAnimation(true);
    }
  }, [scrollX, items, direction, cardWidth]);

  useEffect(() => {
    if (resetAnimation) {
      setScrollX(direction === "LEFT" ? 5 : -5);
      setTimeout(() => {
        setResetAnimation(false);
      }, 100);
    }
  }, [resetAnimation, direction]);
  return (
    <section
      style={{ gap: "30px", overflow: "hidden", maxWidth: "1700px" }}
      className={
        "py-3 w-100 mx-auto d-flex flex-row align-items-center " +
        (direction === "LEFT" ? "justify-content-start" : "justify-content-end") +
        " " +
        className
      }
    >
      {[...items, ...items, ...items].map((item, index) => {
        return (
          <div
            style={{
              transform: `translateX(${scrollX}px)`,
              transitionDuration: resetAnimation ? "0ms" : "300ms",
              // gap: "5px",
              minWidth: cardWidth + "px",
              height: "120px",
              border: "2px solid #f4f8fb",
              borderRadius: "20px",
              boxShadow: "0 6px 12px 1px #f4f8fb",
            }}
            className={`body bg-white d-flex flex-column align-items-center justify-content-center p-3`}
            key={index}
          >
            <img src={item.image} alt={item.label} style={{ width: "140px" }} />
            {/* {item.label} */}
          </div>
        );
      })}
    </section>
  );
}

export default function InfiniteCarousalComponent({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <div className="section">
      <div className="center-heading">
        <h3 className="section-title">Partners</h3>
      </div>
      <div style={{ gap: "30px" }} className="d-flex flex-column mx-auto">
        <InfiniteCarousal items={partners.slice(0, 6)} className={className} />
        <InfiniteCarousal items={partners.slice(6, 12)} className={className} direction={"RIGHT"} />
      </div>
    </div>
  );
}

interface InfiniteCarousalProps {
  items: { label: string; image: string }[];
  className?: string;
  direction?: "LEFT" | "RIGHT";
}
