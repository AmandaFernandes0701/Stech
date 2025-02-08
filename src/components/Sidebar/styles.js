import styled from "styled-components";

import { theme } from "../../styles/theme";

export const SidebarContainer = styled.div`
  width: 250px;
  background: #181818;
  color: white;
  padding: 20px;
  height: 100vh;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    position: absolute;
    left: ${(props) => (props.isOpen ? "0" : "-250px")};
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SectionTitle = styled.h3`
  font-size: 12px;
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
