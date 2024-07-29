import {
  fadeInFromBottomToTopReturn,
  fadeInFromTop,
  fadeInFromXY,
} from "../../../animations/animations";
import cx from "../../libs/cx";
import Icon_Text from "../../shared/icon_text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  id: string;
}

const Inicio = ({ id }: Props) => {
  const [inicioRef, inicioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textPrincipal: { first: string; second: string } = {
    first:
      "Descubre el futuro de las inversiones con Verri Capital Investments, LLC.",
    second:
      "Nuestra experiencia y visión te abre las puertas a oportunidades financieras excepcionales.",
  };

  const textIcons: {
    text: string;
    className: string;
    animation: { x: number; opacity: number };
  }[] = [
    {
      text: "Ofrecemos un análisis financiero exclusivo, adaptado a necesidades específicas.",
      className: "sm:top-[23.75%] top-[-146%] sm:left-[5%] left-[10.25%]",
      animation: {
        x: -600,
        opacity: 1,
      },
    },
    {
      text: "Utilizamos herramientas avanzadas y criterios personalizados.",
      className: "sm:top-[48.5%] top-[-43%] sm:right-[8%] right-3",
      animation: {
        x: 700,
        opacity: 1,
      },
    },
    {
      text: "Identificamos oportunidades que otros pasan por alto.",
      className: "sm:bottom-[11%] bottom-[2%] sm:left-[30%] left-[14%]",
      animation: {
        x: 0,
        opacity: 0,
      },
    },
  ];

  return (
    <section
      ref={inicioRef}
      className="flex flex-col items-center justify-center"
      id={id}
    >
      <div className="relative bg-primary w-full flex items-center justify-center sm:pt-[249.5px] pt-[50px] sm:pb-[434px] pb-[152.75px]">
        <motion.p
          variants={fadeInFromTop}
          initial="initial"
          animate={inicioInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          className="sm:max-w-[45ch] max-w-[26ch] sm:text-[26px] sm:leading-[31.69px] text-[20px] leading-[24.38px] text-center text-quaternary font-[550]"
        >
          {textPrincipal.first}{" "}
          <span className="font-extralight text-[#fff]">
            {textPrincipal.second}
          </span>
        </motion.p>
        <div className="bg-[url('/inicio/bg_img_1.png')] bg-center bg-[length:1452.09px_816.16px] absolute top-0 left-0 w-full h-full opacity-5"></div>
      </div>

      <div className="relative sm:mt-[-447px] mt-0">
        <div className="sm:w-[1142px] sm:h-[773px] w-[333px] sm:mt-0 mt-[-132px]">
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
            src="/inicio/img_1.png"
            className="w-full"
          />
        </div>
        {textIcons.map((tIcon, i) => (
          <Icon_Text
            variants={fadeInFromXY(
              tIcon.animation.x,
              0,
              tIcon.animation.opacity
            )}
            initial="initial"
            animate={inicioInView ? "animate" : "initial"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            key={i}
            icon_path={`/inicio/icon_${i + 1}.svg`}
            text={tIcon.text}
            className={cx(
              tIcon.className,
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
