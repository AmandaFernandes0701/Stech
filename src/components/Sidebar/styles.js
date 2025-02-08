import styled from "styled-components";

import { theme } from "../../styles/theme";

export const SidebarContainer = styled.div`
  display: flex;
  width: ${(props) => (props.collapsed ? "auto" : "300px")};
  background: #181818;
  color: white;
  height: 100vh;
  font-family: Arial, sans-serif;
  transition: width 0.5s ease;
  padding-top: 25px;
  padding-right: 10px;
  @media (max-width: 768px) {
    position: absolute;
    left: ${(props) => (props.isOpen ? "0" : "-300px")};
    transition: left 0.5s ease, width 0.5s ease;
    z-index: 1000;
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  padding: 20px 0px 20px 20px;
  display: ${(props) => (props.collapsed ? "none" : "block")};
`;

export const CollapseColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #181818;
  margin-top: -10px; /* Move the icon a bit higher */
`;

export const CollapseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #181818;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 1.5rem; /* Smaller icon size */
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: rgba(50, 50, 50, 0.7);
  }

  &.active {
    background: rgba(50, 50, 50, 0.7);
    color: ${theme.colors.primary};
    transition: background 0.3s, color 0.3s;

    svg {
      color: ${theme.colors.primary};
      transition: color 0.3s;
    }
  }

  svg {
    display: ${(props) => (props.collapsed ? "none" : "block")};
  }
`;

export const ItemText = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SubMenu = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NotificationBadge = styled.span`
  background: ${theme.colors.primary};
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 12px;
`;
