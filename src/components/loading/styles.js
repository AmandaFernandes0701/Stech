import styled from "styled-components";

import { theme } from "../../styles/theme";

export const TextBold = styled.p`
  font-size: 22px !important;
  font-weight: bold !important;

  @media (max-width: 1200px) {
    font-size: 18px !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
  }

  @media (max-width: 480px) {
    font-size: 14px !important;
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.formBackground};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.title};
  z-index: 9999;
`;
