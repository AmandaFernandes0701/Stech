import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/button/Button";
import Carousel from "../../components/carousel/Carousel";
import { useCarouselContent } from "../../components/carousel/content";
import InputField from "../../components/input-field/InputField";
import { validateEmail, validatePassword } from "../../utils/validation";

import {
  Container,
  Form,
  Title,
  TitleTestimonial,
  Text,
  Subtitle,
  ForgotPassword,
  ForgotPasswordLink,
  SocialLogin,
  TestimonialSection,
  TestimonialCard,
  MotionDiv,
  Tooltip,
  ValidPasswordDiv,
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

        <ValidPasswordDiv>
          <InputField
            type="password"
            label={
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                Password
                <ForgotPassword>
                  <InfoIcon
                    fontSize="small"
                    style={{
                      fill: "none",
                      stroke: "white",
                      marginLeft: "5px",
                      fontSize: "16px",
                    }}
                  />
                  <Tooltip className="tooltip">
                    <ul>
                      <p>- Must be at least 6 characters long.</p>
                      <p>- Must be less than 20 characters long.</p>
                      <p>- Must contain at least one uppercase letter.</p>
                      <p>- Must contain at least one lowercase letter.</p>
                      <p>- Must contain at least one number.</p>
                      <p>- Must contain at least one special character.</p>
                    </ul>
                  </Tooltip>
                </ForgotPassword>
              </div>
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            onEnterPress={handleLogin}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </ValidPasswordDiv>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <ForgotPasswordLink>Forgot your Password?</ForgotPasswordLink>
        </div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <TitleTestimonial>What&apos;s our</TitleTestimonial>
          <TitleTestimonial>Jobseekers Said.</TitleTestimonial>
        </motion.div>
        <TestimonialCard>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Text>Search and find your dream job is now easier than ever.</Text>
            <Text>Just browse a job and apply if you need to.</Text>
          </MotionDiv>

          <Carousel slides={useCarouselContent} />
        </TestimonialCard>
      </TestimonialSection>
    </Container>
  );
};

export default Login;
