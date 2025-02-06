import { ArrowBack, ArrowForward } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";
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
  MotionDiv,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Great Place to Work",
      subtitle: "Join a company that values you",
      text: [
        "Working at Stech has been an amazing experience.",
        "The team is supportive, and the environment is innovative.",
        "I’ve learned so much and look forward to many more years here.",
      ],
      name: "Amanda Fernandes",
      position: "Software Engineer at Stech",
    },
    {
      title: "A Company that Cares",
      subtitle: "Empowering Employees and Driving Innovation",
      text: [
        "At TechCorp, I feel valued as an individual and a team member.",
        "The leadership is always open to new ideas, and the culture is amazing.",
        "It’s inspiring to be part of a company that’s shaping the future.",
      ],
      name: "John Doe",
      position: "Lead Developer at TechCorp",
    },
    {
      title: "Innovative and Inclusive Workplace",
      subtitle: "Where Creativity and Diversity Thrive",
      text: [
        "Working at GlobalTech has been a dream come true.",
        "I am surrounded by talented people who are passionate about what they do.",
        "The inclusive culture and constant innovation make it an exciting place to work.",
      ],
      name: "Jane Smith",
      position: "CTO at GlobalTech",
    },
    {
      title: "Transformative Work Environment",
      subtitle: "Grow, Innovate, Lead",
      text: [
        "InnovateX has given me the opportunity to grow professionally and personally.",
        "The team is collaborative, and the leadership encourages bold ideas.",
        "It’s a place where creativity is celebrated and real-world solutions are built.",
      ],
      name: "Sam Taylor",
      position: "Product Manager at InnovateX",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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

        <ForgotPassword>Forgot Password</ForgotPassword>

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

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <TextBold>{slides[currentSlide].name}</TextBold>
            <Text>{slides[currentSlide].position}</Text>
          </MotionDiv>

          <ArrowsContainer>
            <ArrowButton onClick={handlePrevSlide}>
              <ArrowBack />
            </ArrowButton>
            <ArrowButton onClick={handleNextSlide}>
              <ArrowForward />
            </ArrowButton>
          </ArrowsContainer>

          <WhiteCard>
            <InnerCard>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <TextBold>{slides[currentSlide].title}</TextBold>
                <TextBold style={{ paddingBottom: "25px" }}>
                  {slides[currentSlide].subtitle}
                </TextBold>
                {slides[currentSlide].text.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <Text>{line}</Text>
                  </motion.div>
                ))}
              </motion.div>
            </InnerCard>
          </WhiteCard>
        </TestimonialCard>
      </TestimonialSection>
    </Container>
  );
};

export default Login;
