import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import { validateEmail, validatePassword } from "../../utils/validation";

import {
  Container,
  Form,
  Title,
  TitleTestimonial,
  Text,
  TextBold,
  Subtitle,
  ForgotPassword,
  SocialLogin,
  TestimonialSection,
  TestimonialCard,
  InnerCard,
  WhiteCard,
  ArrowsContainer,
  ArrowButton,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

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
        <div>
          <Title isWelcomeBack={true}>Welcome Back</Title>
          <Subtitle>Please Enter your Account details</Subtitle>
        </div>
        <InputField
          type="email"
          label="Email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          onEnterPress={handleLogin}
        />

        <InputField
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          onEnterPress={handleLogin}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <ForgotPassword href="#">Forgot Password</ForgotPassword>

        <Button onClick={handleLogin} loading={loading}>
          Sign in
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
        <TitleTestimonial>What&apos;s our</TitleTestimonial>
        <TitleTestimonial>Jobseekers Said.</TitleTestimonial>

        <TestimonialCard>
          <div style={{ padding: "50px 0px 20px 25px" }}>
            <Text>Search and find your dream job is now easier than ever.</Text>
            <Text>Just browse a job and apply if you need to.</Text>
          </div>

          <div style={{ padding: "50px 0px 20px 25px" }}>
            <TextBold>Amanda Fernandes</TextBold>
            <Text>Software Engineer at Stech</Text>
          </div>

          <ArrowsContainer>
            <ArrowButton>
              <ArrowBack />
            </ArrowButton>
            <ArrowButton>
              <ArrowForward />
            </ArrowButton>
          </ArrowsContainer>

          <WhiteCard>
            <InnerCard>
              <TextBold>Get your right job and right</TextBold>
              <TextBold style={{ paddingBottom: "25px" }}>
                place apply now
              </TextBold>
              <Text>Be among the first founders to</Text>
              <Text>experience the easiest way to start</Text>
              <Text>run a business.</Text>
            </InnerCard>
          </WhiteCard>
        </TestimonialCard>
      </TestimonialSection>
    </Container>
  );
};

export default Login;
