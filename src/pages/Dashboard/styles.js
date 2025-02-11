import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${theme.colors.formBackground};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 70px 10px 10px 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 30px;
  color: ${theme.colors.text};
  font-size: 1.7rem;
  font-weight: 600;
  position: relative;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 10px;

    select {
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
    }

    .download-button {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.text};
      border: none;
      border-radius: ${theme.borderRadius};
      cursor: pointer;
      transition: background-color 0.3s;
      height: 35px;
      font-weight: 600;
      text-transform: none;

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }

      .MuiSvgIcon-root {
        font-size: 1.2rem;
      }

      @media (max-width: 480px) {
        .MuiButton-label > span:not(.MuiButton-startIcon) {
          display: none;
        }
      }
    }
  }

  @media (max-width: 680px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    .header-right {
      margin-top: 10px;
      width: 100%;
      justify-content: space-between;

      select {
        font-size: 14px;
        height: 30px;
      }

      .download-button {
        font-size: 14px;
        height: 30px;
        padding: 4px 8px;
      }
    }
  }

  @media (max-width: 481px) {
    .header-right {
      .download-button {
        font-size: 12px;
        height: 28px;
        padding: 3px 6px;
      }
    }
  }

  @media (max-width: 320px) {
    .header-right {
      .download-button {
        font-size: 10px;
        height: 26px;
        padding: 2px 5px;
      }
    }
  }

  @media (max-width: 681px) {
    .header-right {
      justify-content: center;
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const AttendanceGrid = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.attendanceBackground};
  color: ${theme.colors.text};
  padding: 40px;
  border-radius: 30px;
  gap: 1rem;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.inputBackground};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.iconColor};
    border-radius: 10px;
    border: 2px solid ${theme.colors.inputBackground};
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 20px;
  }

  &:nth-of-type(3) {
    height: 100%;
  }
`;

export const AttendanceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .icon-button {
    color: #b0b0b0;
    transition: color 0.2s;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 6px 12px;

    &:hover {
      color: #fff;
      background-color: ${theme.colors.iconButtonHover};
    }
  }
`;

export const AttendanceCard = styled.div`
  background: ${theme.colors.attendanceCardBackground};
  border-radius: 25px;
  box-shadow: ${theme.boxShadow};
  padding: 20px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(1.05) translate(0, 0);
    transition: transform 0.2s ease;
  }

  .attendance-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        margin-left: 5px;
        font-weight: 600;
        font-size: 1rem;
      }
    }

    .status-flag {
      color: ${(props) => props.color};
      background-color: ${(props) => props.backgroundColor};
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 500;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;

      .status-flag {
        margin-top: 10px;
        padding: 4px 8px;
        font-size: 0.9rem;
      }
    }
  }

  .attendance-times {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: left;

      p:first-child {
        font-size: 14px;
        color: ${theme.colors.textSecondary};
        font-weight: regular;
      }

      p:last-child {
        font-size: 1rem;
        margin-top: 5px;
        font-weight: 500;
      }
    }
  }
`;

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

export const AttendanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 30px;
  margin-bottom: 20px;
  color: ${theme.colors.text};
  font-size: 1.7rem;
  font-weight: 600;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
  }

  @media (max-width: 680px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;

  @media (max-width: 769px) {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 5px 10px;
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.inputBorder};
    background-color: ${theme.colors.inputBackground};
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.text};
    height: 35px;
    padding-left: 40px;

    &:focus {
      border-color: ${theme.colors.primary};
      outline: none;
    }

    @media (max-width: 769px) {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 14px;
    }
  }

  .search-icon {
    position: absolute;
    margin-left: 10px;
    color: ${theme.colors.iconColor};

    @media (max-width: 769px) {
      margin-left: 30px;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
