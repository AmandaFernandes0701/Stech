import { useState, useEffect } from "react";

const useLoadingDots = () => {
  const [loadingDots, setLoadingDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return loadingDots;
};

export default useLoadingDots;
