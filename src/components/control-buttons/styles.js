import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Controls = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;

  .icon-button {
    color: #b0b0b0;
    transition: color 0.2s, background-color 0.4s;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 6px 12px;

    &:hover {
      color: #fff;
      background-color: ${theme.colors.iconButtonHover};
    }

    &.active {
      color: #fff;
      background-color: ${theme.colors.attendanceCardBackground};
    }
  }

  @media (max-width: 680px) {
    width: 100%;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 10px;
    flex-direction: row;

    .icon-button {
      width: 30px;
      height: 30px;
      padding: 0;
      flex: 1 1 calc(50% - 10px);
    }

    .icon-button .MuiButton-startIcon {
      margin: 0;
    }

    .icon-button .MuiButton-label > span:not(.MuiButton-startIcon) {
      display: none;
    }
  }
`;
