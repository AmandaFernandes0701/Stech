import styled from "styled-components";

import { theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) =>
    props.loading ? "#2C6A53" : theme.colors.primary};
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: ${theme.borderRadius};
  margin-top: 20px;
  cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  height: 40px;

  &:hover {
    background-color: #2c6a53;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    border: 4px solid rgb(201, 188, 188);
    border-top: 4px solid #2c6a53;
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

  span {
    margin-left: 10px;
    font-size: ${theme.fontSizes.small};
    color: rgb(201, 188, 188);
  }
`;
