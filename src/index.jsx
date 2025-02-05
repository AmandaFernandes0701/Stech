import { createRoot } from "react-dom/client";
import App from "./routes/Routes.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
