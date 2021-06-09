import { MutableRefObject, useEffect, useRef } from "react";

export const useIntersectionObserver = (
  element: MutableRefObject<HTMLDivElement>,
  callbackIfVisible: CallableFunction,
  callbackIfNotVisible: CallableFunction,
  threshold = 1,
): void => {
  const observer = useRef(
    typeof IntersectionObserver !== `undefined`
      ? new IntersectionObserver(
          (entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
              callbackIfVisible();
            } else {
              callbackIfNotVisible();
            }
          },
          { threshold },
        )
      : null,
  );

  useEffect(() => {
    // Store the element in current element

    const currentElement = element.current;
    // Store the Intersection Observer in new Vairable
    const currentObserver = observer.current;

    if (currentElement) {
      // If current element is found .
      // Set the IntersectionObserver to Observe it
      currentObserver.observe(currentElement);
    }

    // Return the clean fix to unobserve
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
};
