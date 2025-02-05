import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  Subtitle,
  ForgotPassword,
  SocialLogin,
  TestimonialSection,
  TestimonialCard,
  InputWrapper,
  EyeIcon,
  Text,
  ErrorMessage,
  SpinnerWrapper,
} from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { validateEmail, validatePassword } from "./validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    let dotInterval;
    if (loading) {
      dotInterval = setInterval(() => {
        setDots((prev) => {
          if (prev === "...") return ".";
          return prev + ".";
        });
      }, 500);

      return () => clearInterval(dotInterval);
    }
  }, [loading]);

  const handleLogin = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (emailValidationError || passwordValidationError) {
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
    } else {
      setEmailError("");
      setPasswordError("");
      setLoading(true);
      toast.success("Login successful!");
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    }
  };

  return (
    <Container>
      <Form>
        <Title>Welcome Back</Title>
        <Subtitle>Please Enter your Account details</Subtitle>
        <Text>Email</Text>
        <Input
          type="email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            borderColor: emailError ? "red" : "",
            backgroundColor: emailError ? "#ffe6e6" : "",
            color: emailError ? "black" : "",
          }}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}{" "}
        <Text>Password</Text>
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderColor: passwordError ? "red" : "",
              backgroundColor: passwordError ? "#ffe6e6" : "",
              color: passwordError ? "black" : "",
            }}
          />
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </EyeIcon>
        </InputWrapper>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}{" "}
        <ForgotPassword href="#">Forgot Password</ForgotPassword>
        <Button onClick={handleLogin} loading={loading}>
          {loading ? (
            <SpinnerWrapper>
              <div className="spinner"></div>
              <span>Logging in{dots}</span>
            </SpinnerWrapper>
          ) : (
            "Sign in"
          )}
        </Button>
        <SocialLogin>
          <div className="icon">
            <GoogleIcon fontSize="large" />
          </div>
          <div className="icon">
            <GitHubIcon fontSize="large" />
          </div>
          <div className="icon">
            <FacebookIcon fontSize="large" />
          </div>
        </SocialLogin>
      </Form>

      <TestimonialSection>
        <TestimonialCard>
          <blockquote>
            &quot;Search and find your dream job is now easier than ever. Just
            browse a job and apply if you need to.&quot;
          </blockquote>
          <h2>Mas Parjono</h2>
          <p>UI Designer at Google</p>
        </TestimonialCard>
      </TestimonialSection>
    </Container>
  );
};

export default Login;
