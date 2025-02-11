import { motion } from "framer-motion";
import styled from "styled-components";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  height: 100%;
  background: ${theme.colors.inputBackground};
  padding: 0 5%;

  @media (max-width: 1300px) {
    gap: 2vh;
  }

  .indent {
    padding-left: 5px;
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

  @media (max-width: 1100px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const TitleTestimonial = styled.h1`
  font-size: 60px;
  align-self: flex-start;
  padding-left: 25px;

  @media (max-width: 1500px) {
    font-size: 50px;
    padding-left: 15px;
  }

  @media (max-width: 1350px) {
    font-size: 40px;
    padding-left: 15px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 10px 0 30px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ForgotPassword = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 14px;

  &:hover .tooltip {
    display: block;
    opacity: 1;
  }

  &:hover {
    .tooltip {
      display: block;
      opacity: 1;
    }
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ForgotPasswordLink = styled.p`
  align-self: flex-end;
  font-size: 14px;
  padding-right: 8px;
  color: ${theme.colors.primary};
  float: right;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ValidPasswordDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const Tooltip = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translateY(-50%);
  background-color: black;
  color: ${theme.colors.textLight};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 1;
  font-size: 12px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
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

    @media (max-width: 768px) {
      svg {
        font-size: 35px;
      }
    }
  }
`;

export const Text = styled.p`
  font-size: 14px !important;
  font-weight: 500 !important;
`;

export const TextBold = styled.p`
  font-size: 24px !important;
  font-weight: bold !important;

  @media (max-width: 768px) {
    font-size: 20px !important;
  }

  @media (max-width: 480px) {
    font-size: 18px !important;
  }
`;

export const TestimonialDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1800px) {
    width: 100%;
  }

  @media (max-width: 1250px) {
    width: 100%;
  }
`;

export const TestimonialSection = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 0px 40px 15px 15px;
  padding: 30px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

export const TestimonialSectionTop = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 15px 40px 0px 0px;
  height: 90px;
  padding: 25px;
  width: 85%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

export const GreenSquare = styled.div`
  background-color: ${theme.colors.primary};
  height: 55px;
  width: 55px;
`;

export const BlackCircle = styled.div`
  background-color: ${theme.colors.inputBackground};
  height: 65px;
  width: 65px;
  border-radius: 0px 0px 0px 50%;
  position: relative;
  top: 0;
  left: -55px;
  z-index: 1;
`;

export const TestimonialCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  width: 100%;

  h2 {
    font-size: 22px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  blockquote {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 14px;
    }
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
    font-size: 55px;

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 480px) {
      font-size: 34px;
    }
  }
`;

export const MotionDiv = styled(motion.div)`
  padding: 0px 0px 20px 25px;
`;
