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
  background: ${theme.colors.formBackground};
  flex: 1;
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
  background-color: ${theme.colors.attendanceBackground};
  color: ${theme.colors.text};
  padding: 20px;
  border-radius: 30px;
  gap: 20px;
  margin-top: 20px;
`;

export const AttendanceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
`;

export const AttendanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 25px;
  border-radius: 8px;
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
    width: 8px;
    background-color: ${theme.colors.primary};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
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
  border-radius: 30px;
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
