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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 3vh;
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

  &:first-of-type {
    padding-top: 15px;
  }

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

export const ForgotPassword = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  padding-right: 10px;
  font-size: ${theme.fontSizes.small};
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
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

  @media (max-width: 1020px) {
    font-size: 12px !important;
  }
`;

export const TextBold = styled.p`
  font-size: 22px !important;
  font-weight: bold !important;

  @media (max-width: 1090px) {
    font-size: 18px !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
  }

  @media (max-width: 480px) {
    font-size: 14px !important;
  }
`;

export const TestimonialSection = styled.div`
  color: white;
  background-color: ${theme.colors.primary};
  border-radius: 15px;
  width: 75vh;
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
//   background: white;
//   color: black;
//   padding: 30px;
//   border-radius: 15px;
//   font-size: 14px;
//   font-weight: bold;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
//   height: auto;

//   @media (max-width: 768px) {
//     padding: 20px;
//     font-size: 12px;
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//     font-size: 10px;
//   }
// `;

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

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;

  @media (max-width: 1090px) {
    margin-top: 20px;
    margin-left: 0px;
    justify-content: center;
  }
`;

export const MotionDiv = styled(motion.div)`
  padding: 50px 0px 20px 25px;

  @media (max-width: 1180px) {
    padding: 40px 0px 15px 20px;
  }

  @media (max-width: 1090px) {
    padding: 30px 0px 10px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 0px 5px 10px;
  }
`;
