import { MutableRefObject, useEffect, useState } from "react";

export const clipInLeftAnimation = (
  duration: number,
  delay: number,
  ref: MutableRefObject<HTMLElement>,
): any => {
  if (!IsVisibleObserver(ref)) {
    return;
  }

  return {
    visibility: "visible",
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    animationName: "clipInLeft",
  };
};

export const fadeInAnimation = (
  duration: number,
  delay: number,
  ref?: MutableRefObject<HTMLElement>,
): any => {
  if (!IsVisibleObserver(ref)) {
    return;
  }

  return {
    visibility: "visible",
    animationDuration: duration,
    animationDelay: `${delay}s`,
    animationName: "fadeIn",
  };
};

const IsVisibleObserver = (isVisibleElementRef: MutableRefObject<HTMLElement>) => {
  const [visible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isVisibleElementRef) {
      return;
    }

    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.8,
      },
    ).observe(isVisibleElementRef.current as Element);
  }, [isVisibleElementRef]);

  return visible;
};
