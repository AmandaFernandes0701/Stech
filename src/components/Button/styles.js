import styled from "styled-components";

import { theme } from "../../styles/theme";

const { colors, fontSizes, borderRadius } = theme;

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) =>
    props.loading ? colors.primaryDark : colors.primary};
  color: ${colors.text};
  font-size: ${fontSizes.subtitle};
  font-weight: 600;
  border: none;
  border-radius: ${borderRadius};
  margin-top: 40px;
  cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  height: 50px;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    border: 4px solid ${colors.spinnerBorder};
    border-top: 4px ${colors.primaryDark};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    margin-left: 8px;
    color: ${colors.spinnerBorder};
  }
`;
