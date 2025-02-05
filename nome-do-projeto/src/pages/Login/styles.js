import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #002b29;
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
  background: #101010;
  color: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin: 10px 0;
  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  padding-right: 40px;
  &:focus {
    outline: none;
    border-color: #00c896;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.loading ? "#009973" : "#00c896")};
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.loading ? "#009973" : "#007a63")};
  }
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 7px;
`;

export const ForgotPassword = styled.a`
  color: #00c896;
  text-decoration: none;
  margin: 10px 10px 10px 0;
  font-size: 14px;
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
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.1);
      color: #00c896;
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
  color: white;
  @media (max-width: 768px) {
    margin-top: 40px;
    align-items: center;
  }
`;

export const TestimonialCard = styled.div`
  background-color: #00c896;
  color: #002b29;
  height: 90vh;
  padding: 24px;
  border-radius: 16px;
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

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    border: 4px solid rgb(201, 188, 188);
    border-top: 4px solid #009973;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  span {
    margin-left: 10px;
    font-size: 14px;
    color: rgb(201, 188, 188);
  }
`;
