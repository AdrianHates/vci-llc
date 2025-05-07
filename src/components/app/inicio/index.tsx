import {
  fadeInFromBottomToTopReturn,
  fadeInFromTop,
  fadeInFromXY,
} from "../../../animations/animations";
import cx from "../../libs/cx";
import Icon_Text from "../../shared/icon_text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "../../shared/carousel/index";

interface Props {
  id: string;
  dictionary: Home;
}

const carouselItems: string[] = [
  "/inicio/carousel_1.png",
  "/inicio/carousel_2.png",
  "/inicio/carousel_3.png",
];

const imgBgPath: string = `${import.meta.env.BASE_URL}/inicio/img_1.png`;

const textIcons: {
  className: string;
  animation: { x: number; opacity: number };
}[] = [
  {
    className: "sm:top-[23.75%] top-[-146%] sm:left-[5%] left-[10.25%]",
    animation: {
      x: -600,
      opacity: 0,
    },
  },
  {
    className: "sm:top-[48.5%] top-[-43%] sm:right-[8%] right-3",
    animation: {
      x: 700,
      opacity: 0,
    },
  },
  {
    className: "sm:bottom-[11%] bottom-[2%] sm:left-[30%] left-[14%]",
    animation: {
      x: 0,
      opacity: 0,
    },
  },
];

const Inicio = ({ id, dictionary }: Props) => {
  const [inicioRef, inicioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={inicioRef}
      className="flex flex-col items-center justify-center mb-16"
      id={id}
    >
      <div className="relative bg-primary w-full flex items-center justify-center sm:pt-[249.5px] pt-[150px] sm:pb-[434px] pb-[152.75px]">
        <motion.p
          variants={fadeInFromTop}
          initial="initial"
          animate={inicioInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          className="sm:max-w-[45ch] px-6 max-w-[26ch] sm:text-[26px] sm:leading-[31.69px] text-[20px] leading-[24.38px] text-center text-quaternary font-[550]"
        >
          {dictionary.textPrincipal.first}{" "}
          <span className="font-extralight text-[#fff]">
            {dictionary.textPrincipal.second}
          </span>
        </motion.p>
        <div className="bg-[url('inicio/bg_img_1.png')] bg-center bg-[length:1452.09px_816.16px] absolute top-0 left-0 w-full h-full opacity-5" />
      </div>

      <div className="relative sm:mt-[-447px] mt-0">
        <div className="relative sm:max-w-[1142px] sm:max-h-[773px] max-w-[333px] sm:mt-0 mt-[-132px] aspect-[16/9]">
          <motion.img
            variants={fadeInFromBottomToTopReturn}
            initial="initial"
            animate={inicioInView ? "animate" : "initial"}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1.5,
              times: [0, 0.5, 1],
            }}
            width="1920"
            height="1080"
            src={imgBgPath}
            className="w-full"
          />
          {inicioInView && (
            <Carousel
              variants={{
                initial: {
                  opacity: 0,
                  y: 500,
                  top: "50%",
                  left: "50%",
                  translateX: "-51%",
                  translateY: "-69%",
                },
                animate: {
                  opacity: [0, 1, 1],
                  y: [500, -20, 0],
                },
              }}
              initial="initial"
              animate={inicioInView ? "animate" : "initial"}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 1.5,
                times: [0, 0.5, 1],
              }}
              carouselItems={carouselItems}
              className="bg-white overflow-hidden absolute w-[59.9%] h-[55.6%]"
            />
          )}
        </div>
        {dictionary.textIcons.map((tIcon, i) => (
          <Icon_Text
            variants={fadeInFromXY(
              textIcons[i].animation.x,
              0,
              textIcons[i].animation.opacity
            )}
            initial="initial"
            animate={inicioInView ? "animate" : "initial"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            key={i}
            icon_path={`${import.meta.env.BASE_URL}inicio/icon_${i + 1}.svg`}
            text={tIcon.text}
            className={cx(
              textIcons[i].className,
              "sm:gap-[10.3px] gap-[5.64px] sm:rounded-[10.38px] rounded-[5.84px] sm:pl-[13px] pl-[7.31px] sm:pt-[11px] pt-[8.44px] sm:pb-[10px] pb-[7.88px]"
            )}
            class_text="sm:text-[17.56px] text-[9.88px] sm:leading-[17.5px] leading-[10px] sm:tracking-[0.039rem] sm:max-w-[25ch] max-w-[23ch]"
            class_icon="sm:w-[45.15px] w-[25.4px] sm:h-[45.15px] h-[25.4px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Inicio;
