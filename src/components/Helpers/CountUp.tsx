import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import React, { FC, useEffect, useRef, useState } from "react";

export const CountUp: FC<{ count: number }> = ({ count }) => {
  const [currentCounted, setCurrentCounted] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  const ref = useRef();

  useIntersectionObserver(ref, () => {
    setStart(true);
  });

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled && start) {
      let sum = 0;

      setInterval(() => {
        if (sum !== count + 1) {
          setCurrentCounted(sum);
          sum++;
        }
      }, 50);
    }

    return () => {
      isCancelled = true;
    };
  }, [count, start]);

  return <strong ref={ref}>{currentCounted}</strong>;
};
