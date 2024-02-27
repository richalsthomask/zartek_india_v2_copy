import React, { useEffect, useState } from "react";
import { partners } from "@/data/partners";

interface InfiniteCarousalProps {
  items: { label: string; image: string }[];
  className?: string;
  direction?: "LEFT" | "RIGHT";
}
export default function InfiniteCarousalComponent({
  className,
}: Omit<InfiniteCarousalProps, "direction" | "items">): JSX.Element {
  return (
    <div
      style={{ maxWidth: "1300px", gap: "40px" }}
      className="px-sm-4 px-lg-5 py-5 d-flex flex-column mx-auto"
    >
      <InfiniteCarousal items={partners.slice(0, 5)} className={className} />
      <InfiniteCarousal items={partners.slice(5, 11)} className={className} direction={"RIGHT"} />
    </div>
  );
}

function InfiniteCarousal({
  items,
  className,
  direction = "LEFT",
}: InfiniteCarousalProps): JSX.Element {
  const [scrollX, setScrollX] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((scrollX) => scrollX + (direction === "LEFT" ? -10 : 10));
    }, 150);
    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (
      direction === "LEFT"
        ? scrollX <= -300 * items.length - (30 * items.length - 1)
        : scrollX >= 300 * items.length + (30 * items.length - 1)
    ) {
      setResetAnimation(true);
    }
  }, [scrollX, items, direction]);

  useEffect(() => {
    if (resetAnimation) {
      setScrollX(direction === "LEFT" ? 5 : -5);
      setTimeout(() => {
        setResetAnimation(false);
      }, 2);
    }
  }, [resetAnimation, direction]);
  return (
    <section
      style={{ gap: "30px", overflow: "hidden" }}
      className={
        "py-2 w-100 mx-auto d-flex flex-row align-items-center " +
        (direction === "LEFT" ? "justify-content-start" : "justify-content-end") +
        " " +
        className
      }
    >
      {[...items, ...items].map((item, index) => {
        return (
          <div
            style={{
              transform: `translateX(${scrollX}px)`,
              transitionDuration: resetAnimation ? "0ms" : "300ms",
              gap: "5px",
              minWidth: "300px",
              height: "120px",
              border: "1px solid #f4f8fb",
              borderRadius: "20px",
              boxShadow: "0 4px 8px 0 #f4f8fb",
            }}
            className={`body bg-white shadow-lg d-flex flex-column align-items-center justify-content-center p-3`}
            key={index}
          >
            <img src={item.image} alt={item.label} style={{ width: "100px" }} />
            {item.label}
          </div>
        );
      })}
    </section>
  );
}
