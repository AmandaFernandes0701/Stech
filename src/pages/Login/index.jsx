import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Title,
  Subtitle,
  ForgotPassword,
  SocialLogin,
  TestimonialSection,
  TestimonialCard,
} from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

import { validateEmail, validatePassword } from "./validation";

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
        <Title>Welcome Back</Title>
        <Subtitle>Please Enter your Account details</Subtitle>

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
