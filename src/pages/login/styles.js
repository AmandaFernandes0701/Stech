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
    width: 48%;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TitleTestimonial = styled.h1`
  font-size: 50px;
  align-self: flex-start;
  padding-left: 25px;

  @media (max-width: 1180px) {
    font-size: 40px;
    padding-left: 15px;
  }

  @media (max-width: 1090px) {
    font-size: 40px;
  }

  @media (max-width: 1020px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    padding-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    padding-bottom: 5px;
    padding-left: 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.subtitle};
  margin: 10px 0 30px 0;

  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.small};
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
        font-size: 30px;
      }
    }
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.text};
  font-weight: 500 !important;
  font-size: 12px !important;

  @media (max-width: 1200px) {
    font-size: 12px !important;
  }
`;

export const TextBold = styled.p`
  font-size: 22px !important;
  font-weight: bold !important;

  @media (max-width: 1200px) {
    font-size: 18px !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
  }

  @media (max-width: 480px) {
    font-size: 14px !important;
  }
`;

export const TestimonialDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vh;
`;

export const TestimonialSection = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 0px 40px 15px 15px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const TestimonialSectionTop = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 15px 40px 0px 0px;
  height: 80px;
  padding: 20px;
  width: 85%;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const GreenSquare = styled.div`
  background-color: ${theme.colors.primary};
  height: 50px;
  width: 50px;
`;

export const BlackCircle = styled.div`
  background-color: ${theme.colors.inputBackground};
  height: 60px;
  width: 60px;
  border-radius: 0px 0px 0px 50%;
  position: relative;
  top: 0;
  left: -50px;
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
    font-size: 20px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  blockquote {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 12px;
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
    font-size: 45px;

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const MotionDiv = styled(motion.div)`
  padding: 0px 0px 20px 25px;
`;
