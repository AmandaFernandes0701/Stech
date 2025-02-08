import { useLoading } from "../../utils/useLoading";

import { ButtonContainer, SpinnerWrapper } from "./styles";

const Button = ({ onClick, loading, children }) => {
  const dots = useLoading(loading);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={onClick}
      loading={loading}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {loading ? (
        <SpinnerWrapper>
          <div className="spinner"></div>
          <span>Logging in{dots}</span>
        </SpinnerWrapper>
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

export default Button;
