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
  background-color: white;
  height: 50px;
  border: 2px solid ${theme.colors.inputBorder};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.text};
  color: black;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  ${(props) =>
    props.maskModified &&
    `
      letter-spacing: 0.2em;
      font-size: calc(${theme.fontSizes.text} * 1.3);
      font-weight: bold;
      &::placeholder {
         letter-spacing: 0;
         font-size: ${theme.fontSizes.text};
         font-weight: 500;
      }
  `}
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
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
