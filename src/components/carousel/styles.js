import styled from "styled-components";

import { theme } from "../../styles/theme";

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;

  @media (max-width: 1090px) {
    margin-top: 20px;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ArrowButton = styled.div`
  background: ${theme.colors.cardBackground};
  color: ${theme.colors.cardText};
  border-radius: ${theme.borderRadius};
  padding: 6px 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${theme.colors.buttonHover};
    color: ${theme.colors.buttonTextHover};
  }
`;

export const WhiteCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

export const InnerCard = styled.div`
  background: white;
  color: black;
  padding: 30px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  height: auto;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 10px;
  }
`;
