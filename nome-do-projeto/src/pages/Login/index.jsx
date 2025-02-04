import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginButton, LoginTitle } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      navigate("/dashboard"); // Redireciona para a página de dashboard
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>Login</LoginButton>
    </LoginContainer>
  );
};

export default Login;
