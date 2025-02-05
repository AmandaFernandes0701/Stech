import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.background};
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${theme.colors.formBackground};
  color: ${theme.colors.text};
  padding: 40px;
  border-radius: ${theme.borderRadius};
  width: 100%;
  max-width: 500px;
  box-shadow: ${theme.boxShadow};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.subtitle};
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ForgotPassword = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  margin: 10px 10px 10px 0;
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

export const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    margin-top: 40px;
    align-items: center;
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  height: 90vh;
  padding: 24px;
  border-radius: ${theme.borderRadius};

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  blockquote {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
