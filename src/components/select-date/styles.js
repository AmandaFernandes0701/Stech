import styled from "styled-components";

import { theme } from "../../styles/theme";

export const SelectContainer = styled.select`
  padding: 5px 10px;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.colors.inputBorder};
  background-color: ${theme.colors.attendanceBackground};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.text};
  height: 38px;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;
