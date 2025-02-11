import { motion } from "framer-motion";
import styled from "styled-components";

import { theme } from "../../styles/theme";

export const SidebarContainer = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => (props.collapsed ? "45px" : "250px")};
  background: ${theme.colors.formBackground};
  color: white;
  font-family: Arial, sans-serif;
  transition: width 0.5s ease;
  padding-top: 25px;
  padding-right: ${(props) => (props.collapsed ? "0" : "10px")};

  @media (max-width: 768px) {
    position: fixed;
    height: ${(props) => (props.collapsed ? "50px" : "auto")};
    width: -webkit-fill-available;
    z-index: 1000;
  }
`;

export const SidebarContent = styled(motion.div)`
  flex: 1;
  padding: 20px 0px 20px 20px;
  display: ${(props) => (props.collapsed ? "none" : "block")};
`;

export const CollapseColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: transparent;
  height: 100%;
  position: absolute;
  top: 0;
  transition: right 0.5s ease;
  z-index: 10;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 45px;
    position: fixed;
    z-index: 1000;
  }
`;

export const CollapseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 8px 0px 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 15px;
  padding-top: 15px;
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
  margin-top: 5px;
`;

export const NotificationBadge = styled.span`
  background: ${theme.colors.primary};
  color: white;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 12px;
`;

export const SidebarOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 900;
  }
`;
