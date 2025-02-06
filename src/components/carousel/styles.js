import styled from "styled-components";

import { theme } from "../../styles/theme";

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;

  @media (max-width: 1200px) {
    margin-top: 20px;
    margin-left: 0px;
    justify-content: center;
  }

  @media (max-width: 950px) {
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
  border-radius: 15px 125px 125px 15px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1200px) {
    border-radius: 15px 15px 120px 15px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 10px;
  }

  .circle {
    width: 180px;
    height: 180px;
    margin-left: 10px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1226px) {
      width: 125px;
      height: 125px;
    }

    @media (max-width: 1200px) {
      margin-top: 15px;
    }

    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }

  .text-container {
    flex: 1;
  }
`;
