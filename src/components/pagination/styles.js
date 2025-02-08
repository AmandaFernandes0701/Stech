import styled from "styled-components";

import { theme } from "../../styles/theme";

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 20px;

  .pagination-button {
    color: #b0b0b0;
    background-color: transparent;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    width: 30px;
    height: 30px;
    min-width: 30px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: ${theme.colors.iconButtonHover};
    }

    &:disabled {
      color: #666;
      background-color: #333;
      cursor: not-allowed;
    }

    &.active {
      color: #fff;
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  }

  .pagination-ellipsis {
    color: #b0b0b0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;
