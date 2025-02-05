import { createGlobalStyle } from "styled-components";

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

  .Toastify__toast {
    background-color: #1c1c1c;
    color: white;
  }

  .Toastify__toast--success {
    background-color: #1c1c1c; ;
  }

  .Toastify__toast--error {
    background-color: #ff4d4d;
  }

  .Toastify__toast--info {
    background-color: #4a90e2;
  }

  .Toastify__toast--warning {
    background-color: #f39c12;
  }
`;
