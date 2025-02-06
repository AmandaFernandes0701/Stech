import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

import { Text, TextBold } from "../../pages/login/styles";

import { ArrowsContainer, ArrowButton, WhiteCard, InnerCard } from "./styles";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <WhiteCard>
      <ArrowsContainer>
        <ArrowButton onClick={handlePrevSlide}>
          <ArrowBack />
        </ArrowButton>
        <ArrowButton onClick={handleNextSlide}>
          <ArrowForward />
        </ArrowButton>
      </ArrowsContainer>
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
  );
};

export default Carousel;
