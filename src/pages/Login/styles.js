import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  height: 100vh;
  background-color: ${theme.colors.background};
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${theme.colors.text};
  padding: 40px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TitleTestimonial = styled.h1`
  font-size: 50px;
  align-self: flex-start;
  padding-left: 25px;

  &:first-of-type {
    padding-top: 15px;
  }

  @media (max-width: 900px) {
    font-size: 45px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.subtitle};
  margin: 10px 0 30px 0;
`;

export const ForgotPassword = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: ${theme.fontSizes.small};
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;

  .icon {
    color: ${theme.colors.text};
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.1);
      color: ${theme.colors.primary};
    }

    svg {
      font-size: 40px;
    }
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.text};
  font-weight: 500 !important;
`;

export const TextBold = styled.p`
  font-size: 22px !important;
  font-weight: bold !important;

  @media (max-width: 768px) {
    font-size: 18px !important;
  }
`;

export const WhiteCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

export const TestimonialSection = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 15px;
  width: 60vh;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const TestimonialCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  width: 100%;

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  blockquote {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const InnerCard = styled.div`
  background: white;
  color: black;
  padding: 30px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  ${Title} {
    font-size: 45px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 70px;
  margin-bottom: 30px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 0;
    justify-content: center;
  }
`;

export const ArrowButton = styled.div`
  background: #ddffed;
  color: #112a1d;
  border-radius: 8px;
  padding: 6px 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #112a1d;
    color: #ddffed;
  }
`;
