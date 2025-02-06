import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin: 10px 0;
  background: #121212;
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.text};
  color: ${theme.colors.text};
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.text};
  margin-top: 20px;
  margin-left: 7px;
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: 12px;
  margin-top: 5px;
`;
