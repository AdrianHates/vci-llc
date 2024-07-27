import { Variants } from "framer-motion";

export const fadeInFromLeft10050 = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInFromTop: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInFromX = (x: number, opacity: number): Variants => ({
  initial: { opacity, x },
  animate: { opacity: 1, x: 0 },
});

export const fadeInFromBottomToTopReturn: Variants = {
  initial: { opacity: 0, y: 500 },
  animate: {
    opacity: [0, 1, 1],
    y: [500, -20, 0],
  },
};

export const appearFromCenter: Variants = {
  initial: { opacity: 1, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};
