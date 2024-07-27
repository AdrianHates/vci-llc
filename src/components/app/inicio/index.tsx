import {
  appearFromCenter,
  fadeInFromBottomToTopReturn,
  fadeInFromTop,
  fadeInFromX,
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

  const [featRef, featInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
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

  const listFeatures: { name: string; description: string }[] = [
    {
      name: "Diversificación",
      description:
        "Es nuestra clave para gestionar el riesgo y potenciar el crecimiento de los territorios donde operan nuestras empresas subsidiarías.",
    },
    {
      name: "Innovación",
      description:
        "Adoptamos las últimas tendencias y tecnologías financieras para optimizar la gestión de activos y pasivos; ofrecer a nuestros clientes soluciones vanguardistas que respalden sus inversiones.",
    },
    {
      name: "Comunidad",
      description:
        "La visión de apoyo al mercado, es fundamental en nuestra visión de generar comunidades sostenibles.",
    },
  ];

  return (
    <section
      ref={inicioRef}
      className="flex flex-col items-center justify-center"
      id={id}
    >
      <div className="relative bg-primary w-full flex items-center justify-center sm:pt-[128.5px] pt-[50px] sm:pb-[434px] pb-[152.75px]">
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
          className="sm:w-[1142px] w-[333px] sm:mt-0 mt-[-132px]"
        />
        {textIcons.map((tIcon, i) => (
          <Icon_Text
            variants={fadeInFromX(tIcon.animation.x, tIcon.animation.opacity)}
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

      {listFeatures && (
        <div className="flex sm:flex-row flex-col sm:mx-20 mx-11 gap-16 my-10">
          {listFeatures.map((feat, i) => (
            <motion.div
              ref={featRef}
              key={i}
              variants={appearFromCenter}
              initial="initial"
              animate={featInView ? "animate" : "initial"}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col gap-10 origin-top"
            >
              <img
                src={`/inicio/feat_icon_${i + 1}.svg`}
                className="sm:w-[90px] w-[77.34px] sm:h-[90px] h-[77.34px] mx-auto"
              />
              <div className="flex flex-col sm:gap-6 gap-5">
                <h3 className="text-secondary font-bold text-center text-[20px] leading-[24.38px]">
                  {feat.name}
                </h3>
                <p className="sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light text-center text-[#595959] max-w-[330px]">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Inicio;
