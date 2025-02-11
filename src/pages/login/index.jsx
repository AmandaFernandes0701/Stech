import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/button/Button";
import Carousel from "../../components/carousel/Carousel";
import InputField from "../../components/input-field/InputField";
import { useCarouselContent } from "../../utils/carouselContent";
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
  TestimonialDiv,
  TestimonialSection,
  TestimonialSectionTop,
  GreenSquare,
  BlackCircle,
  TestimonialCard,
  MotionDiv,
  Tooltip,
  ValidPasswordDiv,
} from "./styles";

const PasswordTooltip = () => (
  <Tooltip className="tooltip">
    <ul>
      <p>
        <strong>Must contain at least:</strong>
      </p>
      <p>- 6 characters long</p>
      <p>- 1 uppercase letter</p>
      <p>- 1 lowercase letter</p>
      <p>- 1 number</p>
      <p>- 1 special character</p>
    </ul>
  </Tooltip>
);

const socialIcons = [
  { Icon: GoogleIcon, key: "google" },
  { Icon: GitHubIcon, key: "github" },
  { Icon: FacebookIcon, key: "facebook" },
];

const Login = () => {
  const navigate = useNavigate();
  const carouselSlides = useCarouselContent();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
    emailError: "",
    passwordError: "",
    loading: false,
  });

  const LOGIN_DELAY = 1500;

  const updateForm = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleLogin = () => {
    const emailValidationError = validateEmail(form.email);
    const passwordValidationError = validatePassword(form.password);

    if (emailValidationError || passwordValidationError) {
      updateForm("emailError", emailValidationError);
      updateForm("passwordError", passwordValidationError);
      return;
    }

    updateForm("emailError", "");
    updateForm("passwordError", "");
    updateForm("loading", true);
    toast.success("Login successful!");

    setTimeout(() => {
      updateForm("loading", false);
      navigate("/dashboard");
    }, LOGIN_DELAY);
  };

  const renderPasswordLabel = () => (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <span>Password</span>
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
        <PasswordTooltip />
      </ForgotPassword>
    </div>
  );

  return (
    <Container>
      <Form>
        <div>
          <Title isWelcomeBack>Welcome Back</Title>
          <Subtitle>Please Enter your Account details</Subtitle>
        </div>
        <InputField
          type="email"
          label="Email"
          placeholder="example@domain.com"
          value={form.email}
          onChange={(e) => updateForm("email", e.target.value)}
          error={form.emailError}
          onEnterPress={handleLogin}
        />
        <ValidPasswordDiv>
          <InputField
            type="password"
            label={renderPasswordLabel()}
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => updateForm("password", e.target.value)}
            error={form.passwordError}
            onEnterPress={handleLogin}
            showPassword={form.showPassword}
            setShowPassword={(value) => updateForm("showPassword", value)}
          />
        </ValidPasswordDiv>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <ForgotPasswordLink>Forgot your Password?</ForgotPasswordLink>
        </div>
        <Button onClick={handleLogin} loading={form.loading}>
          Sign in
        </Button>
        <SocialLogin>
          {socialIcons.map(({ Icon, key }) => (
            <div className="icon" key={key}>
              <Icon fontSize="large" />
            </div>
          ))}
        </SocialLogin>
      </Form>
      {!isSmallScreen && (
        <TestimonialDiv>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <TestimonialSectionTop />
            <GreenSquare />
            <BlackCircle />
          </div>
          <TestimonialSection>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                top: "-50px",
              }}
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
                <Text>
                  Searching and finding your dream job is now easier than ever.
                </Text>
                <Text>Just browse a job and apply if you need to.</Text>
              </MotionDiv>
              <Carousel slides={carouselSlides} />
            </TestimonialCard>
          </TestimonialSection>
        </TestimonialDiv>
      )}
    </Container>
  );
};

export default Login;
