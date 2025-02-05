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
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  .Toastify__toast--success {
    background-color: ${theme.colors.toastBackground};
  }

  .Toastify__toast--error {
    background-color: ${theme.colors.error};
  }
`;
