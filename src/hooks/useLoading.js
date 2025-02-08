import { useState, useEffect } from "react";

export const useLoading = (loading) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    let dotInterval;
    if (loading) {
      dotInterval = setInterval(() => {
        setDots((prev) => {
          if (prev === "...") {
            return ".";
          }
          return prev + ".";
        });
      }, 500);
    } else {
      setDots(".");
    }

    return () => clearInterval(dotInterval);
  }, [loading]);

  return dots;
};
