import { CircularProgress } from "@mui/material";

import { theme } from "../../styles/theme";
import useLoadingDots from "../../utils/useLoadingDots";

import { LoadingContainer, TextBold } from "./styles";

const Loading = () => {
  const loadingDots = useLoadingDots();

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
        Loading{loadingDots}
      </TextBold>
    </LoadingContainer>
  );
};

export default Loading;
