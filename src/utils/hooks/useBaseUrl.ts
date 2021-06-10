import { useEffect, useState } from "react";

export const useBaseURL = (): string => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    let isCancelled = false;

    if (typeof window !== "undefined" && !isCancelled) {
      const url = window.location.href?.split("/")[3] as string;

      if (url === "pune" || url === "coimbatore" || url === "hyderabad") {
        setUrl(`/${url}`);
      } else {
        setUrl("");
      }
    }

    return () => {
      isCancelled = true;
    };
  }, [setUrl]);

  return url;
};
