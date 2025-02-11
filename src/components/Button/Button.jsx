import { ButtonContainer, SpinnerWrapper } from "./styles";

const Button = ({ onClick, loading, children }) => {
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
          <p>Logging in</p>
        </SpinnerWrapper>
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

export default Button;
