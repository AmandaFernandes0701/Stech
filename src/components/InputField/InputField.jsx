import React from "react";
import {
  Input,
  Container,
  Text,
  ErrorMessage,
  InputWrapper,
  EyeIcon,
} from "./styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  showPassword,
  setShowPassword,
  label,
  onEnterPress,
}) => (
  <Container>
    <Text>{label}</Text>
    <InputWrapper>
      <Input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          borderColor: error ? "red" : "",
          backgroundColor: error ? "#ffe6e6" : "",
          color: error ? "black" : "",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onEnterPress();
          }
        }}
      />
      {type === "password" && (
        <EyeIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </EyeIcon>
      )}
    </InputWrapper>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Container>
);

export default InputField;
