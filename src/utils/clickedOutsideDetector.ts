import { MutableRefObject, useEffect } from "react";

const useHandleClose = (
  ref: MutableRefObject<HTMLDivElement>,
  callback: CallableFunction,
): void => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useHandleClose;
