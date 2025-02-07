import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

import { theme } from "../../styles/theme";

import { LoadingContainer, TextBold } from "./styles";

const Loading = () => {
  const [loadingDots, setLoadingDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingContainer>
      <CircularProgress style={{ color: theme.colors.primary }} />
      <TextBold
        style={{
          color: theme.colors.primary,
          fontSize: "25px",
          marginLeft: "20px",
        }}
      >
        Carregando{loadingDots}
      </TextBold>
    </LoadingContainer>
  );
};

export default Loading;
