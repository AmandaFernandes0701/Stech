import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Century Gothic', sans-serif;
    background-color: ${theme.colors.background};
    margin: 0;
    padding: 0;
  }

  .Toastify__toast--success {
    background-color: ${theme.colors.toastBackground};
    .Toastify__progress-bar {
      background-color: ${theme.colors.primary};
    }
    .Toastify__toast-body {
      color: ${theme.colors.primary};
    }
    .Toastify__close-button {
      color: white;
    }
    svg {
      fill:${theme.colors.primary};
    }
  }
`;
