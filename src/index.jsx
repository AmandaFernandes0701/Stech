import { createRoot } from "react-dom/client";

import App from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
