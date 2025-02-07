import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  background: ${theme.colors.sidebarBackground};
  color: ${theme.colors.text};
  width: 20%;
  padding: 20px;

  h1 {
    font-size: 1.5rem;
  }

  nav ul,
  footer ul {
    list-style: none;
    padding: 0;
  }

  nav ul li,
  footer ul li {
    margin: 15px 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${theme.colors.formBackground};
  padding: 20px;
`;

export const Header = styled.header`
  background: ${theme.colors.headerBackground};
  color: ${theme.colors.text};
  padding: 10px;
  border-radius: 8px;
`;

export const Card = styled.div`
  background: ${theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: ${theme.boxShadow};
  padding: 20px;
  margin-top: 20px;

  .employee-info {
    display: flex;
    align-items: center;
  }

  .employee-stats p {
    display: block;
    margin: 10px 0;
  }
`;

export const AttendanceGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${theme.colors.attendanceBackground};
  color: ${theme.colors.text};
  padding: 20px;
  border-radius: 30px;
  gap: 1.5rem;
  margin-top: 20px;
`;

export const AttendanceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
  width: 100%;
`;

export const AttendanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 25px;
  margin-bottom: 20px;
  color: ${theme.colors.text};
  font-size: 1.2rem;
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
`;

export const Controls = styled.div`
  display: flex;
  gap: 8px;

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
  padding: 30px;
  width: 100%;

  .attendance-header {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 30px;

    p {
      margin-left: 5px;
      font-weight: bold;
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
        font-size: 15px;
        color: ${theme.colors.textSecondary};
      }

      p:last-child {
        font-size: 1.2rem;
        margin-top: 5px;
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
