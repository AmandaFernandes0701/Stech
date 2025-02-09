import { CircularProgress } from "@mui/material";

import { theme } from "../../styles/theme";

import { LoadingContainer, TextBold } from "./styles";

const Loading = () => (
  <LoadingContainer>
    <CircularProgress style={{ color: theme.colors.primary }} />
    <TextBold
      style={{
        color: theme.colors.primary,
        fontSize: "25px",
        marginLeft: "20px",
      }}
    >
      Loading
    </TextBold>
  </LoadingContainer>
);

export default Loading;
