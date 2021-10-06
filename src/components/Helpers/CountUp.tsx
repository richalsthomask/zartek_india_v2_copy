import React, { FC, useEffect, useRef, useState } from "react";

export const CountUp: FC<{ count: number }> = ({ count }) => {
  const [currentCounted, setCurrentCounted] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  // function checkIsAndroid() {
  //   if (typeof navigator === "undefined") {
  //     return false;
  //   }

  //   const ua = navigator.userAgent.toLowerCase();
  //   const isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  //   if (isAndroid) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  const ref = useRef();

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled && typeof IntersectionObserver === "undefined") {
      return setStart(true);
    }

    if (!isCancelled && typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver((entry) => {
        entry.forEach((each) => {
          if (each.isIntersecting) {
            setStart(true);
            if (ref.current) {
              observer?.unobserve(ref.current);
            }
          }
        });
      });
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const ids = [];
    let sum = 0;

    if (!isCancelled && start) {
      ids.push(
        setInterval(() => {
          if (sum !== count + 1) {
            setCurrentCounted(sum);
            sum++;
          }
        }, 50),
      );
    }

    return () => {
      isCancelled = true;
      ids.forEach((id) => {
        clearInterval(id);
      });
    };
  }, [count, start]);

  return <strong ref={ref}>{currentCounted}</strong>;
};
