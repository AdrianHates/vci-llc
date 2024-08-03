import { useEffect, useState } from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import cx from "../../libs/cx";

interface Props {
  className?: string;
  carouselItems: string[];
  variants?: Variants;
  initial?: string;
  animate?: string;
  transition?: Transition;
}

const Carousel = ({ className, carouselItems, ...props }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const initialDelay = 3000;
    const intervalDelay = 2000;

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        handleNext();
      }, intervalDelay);

      return () => clearInterval(intervalId);
    }, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div className={cx("carousel-container flex", className)} {...props}>
      <button className="prev hidden" onClick={handlePrev}>
        Previous
      </button>
      <div className="carousel-wrapper relative w-full h-full">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={carouselItems[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 1, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 1,
              x: 300,
              transition: { duration: 0.12, ease: "easeOut" },
            }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="carousel-slide w-full h-full absolute top-0 left-0"
          />
        </AnimatePresence>
      </div>
      <button className="next hidden" onClick={handleNext}>
        Next
      </button>
    </motion.div>
  );
};

export default Carousel;
