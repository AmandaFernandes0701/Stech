import { useState, useEffect } from "react";

import { ButtonContainer, SpinnerWrapper } from "./styles";

const Button = ({ onClick, loading, children }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    let dotInterval;
    if (loading) {
      dotInterval = setInterval(() => {
        setDots((prev) => {
          if (prev === "...") {
            return ".";
          }
          return prev + ".";
        });
      }, 500);
    } else {
      setDots(".");
    }

    return () => clearInterval(dotInterval);
  }, [loading]);

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
