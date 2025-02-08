import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

import { Text, TextBold, MotionDiv } from "../../pages/login/styles";
import { useCarouselContent } from "../../utils/carouselContent";
import Loading from "../loading/Loading";

import { ArrowsContainer, ArrowButton, WhiteCard, InnerCard } from "./styles";

const Carousel = () => {
  const slides = useCarouselContent();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) {
    return <Loading />;
  }

  return (
    <WhiteCard>
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

      <InnerCard>
        <div className="text-container">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <TextBold>{slides[currentSlide].title}</TextBold>
            <TextBold style={{ paddingBottom: "10px" }}>
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
        </div>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="circle-container">
            <div className="circle">
              <img
                src={slides[currentSlide].image}
                alt="Person"
                className="circle-image"
              />
            </div>
          </div>
        </motion.div>
      </InnerCard>
    </WhiteCard>
  );
};

export default Carousel;
