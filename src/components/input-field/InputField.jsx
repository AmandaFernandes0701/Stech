import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Input,
  Container,
  Text,
  ErrorMessage,
  InputWrapper,
  EyeIcon,
} from "./styles";

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
}) => {
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\s/g, "");
    e.currentTarget.setRangeText(paste);
  };

  return (
    <Container>
      <Text>{label}</Text>
      <InputWrapper>
        <Input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maskModified={
            type === "password" && !showPassword && value.trim().length > 0
          }
          style={{
            borderColor: error ? "red" : "",
            backgroundColor: error ? "#ffe6e6" : "",
            color: error ? "black" : "",
          }}
          onKeyDown={(e) => {
            if (e.key === " ") {
              e.preventDefault();
              return;
            }
            if (e.key === "Enter") {
              e.preventDefault();
              onEnterPress();
            }
          }}
          onPaste={handlePaste}
        />
        {type === "password" && (
          <EyeIcon onClick={handleTogglePassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </EyeIcon>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputField;
