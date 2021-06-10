import { useEffect, useState } from "react";

export const useBaseURL = (): string => {
  const [url, setUrl] = useState<string>("/");

  useEffect(() => {
    let isCancelled = false;

    if (typeof window !== "undefined" && !isCancelled) {
      const url = window.location.href?.split("/")[3];
      setUrl(`/${url}/`);
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return url;
};
