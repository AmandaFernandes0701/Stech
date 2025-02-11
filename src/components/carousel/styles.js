import styled from "styled-components";

import { theme } from "../../styles/theme";

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
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
  padding: 10px 30px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${theme.colors.buttonHover};
    color: ${theme.colors.buttonTextHover};
  }

  @media (max-width: 1450px) {
    padding: 5px 25px;
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
  border-radius: 0px 40px 30px 15px;
  font-size: 14px;
  font-weight: bold;
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .circle-container {
    @media (max-width: 1300px) {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    height: 240px;
  }

  @media (max-width: 1300px) {
    height: 210px;
  }

  .circle {
    width: 150px;
    height: 150px;
    margin-left: 10px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;

    @media (max-width: 1226px) {
      width: 130px;
      height: 130px;
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
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 50px;
    flex: 1;

    @media (max-width: 1200px) {
      bottom: 45px;
    }
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.formBackground};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.title};
  z-index: 9999;
`;

export const InnerCardSectionTop = styled.div`
  background-color: white;
  border-radius: 15px 40px 0px 0px;
  height: 80px;
  padding: 20px;
  width: 85%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const WhiteSquare = styled.div`
  background-color: white;
  height: 50px;
  width: 50px;
`;

export const GreenCircle = styled.div`
  background-color: ${theme.colors.primary};
  height: 60px;
  width: 60px;
  border-radius: 0px 0px 0px 50%;
  position: relative;
  top: 0;
  left: -50px;
  z-index: 1;
`;

export const WhiteCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 90px;
  width: 90px;
  bottom: 175px;
  left: 185px;
  border-radius: 50%;
  position: relative;
  z-index: 2;

  @media (max-width: 1400px) {
    height: 80px;
    width: 80px;
    bottom: 180px;
    left: 180px;
  }

  @media (max-width: 1300px) {
    bottom: 160px;
    left: 20px;
  }
`;
