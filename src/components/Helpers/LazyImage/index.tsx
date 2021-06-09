import React, { useEffect, useRef, useState } from "react";
import { EllipsisLoader } from "./Loader";

export type viewPortOptions =
  | "0.0"
  | "0.1"
  | "0.2"
  | "0.3"
  | "0.4"
  | "0.5"
  | "0.6"
  | "0.7"
  | "0.8"
  | "0.9"
  | "1.0";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  draggable?: boolean;
  view?: viewPortOptions;
  classNameExtra?: string;
}

export function LazyImage({
  alt,
  src,
  width,
  height,
  draggable = false,
  view = "0.7",
  classNameExtra = "",
}: ImageProps): JSX.Element {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const isVisibleElementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleLoadedEvent() {
    setImageLoading(false);
  }

  useEffect(() => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: parseInt(view, 10),
      },
    ).observe(isVisibleElementRef.current as Element);
  }, [view]);

  return (
    <div ref={isVisibleElementRef} className={classNameExtra}>
      {imageLoading && <EllipsisLoader width={width + "px"} height={height + "px"} />}

      <img
        ref={imageRef}
        draggable={draggable}
        style={{
          height: height + "px",
          width: width + "px",
        }}
        src={isVisible ? src : ""}
        alt={alt}
        className={`lazy-image ${!imageLoading && "loaded"}`}
        onLoad={handleLoadedEvent}
      />
    </div>
  );
}
