import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    ,
  </>
);
