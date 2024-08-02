import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInFromXY } from "../../../animations/animations";

const FirstSection = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex lg:flex-row flex-col items-center sm:pt-[90px] pt-[75px] sm:pb-[89px] pb-8 lg:gap-0 gap-10">
      <motion.div
        variants={fadeInFromXY(-250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        ref={firstRef}
      >
        <div className="flex flex-col items-center gap-14 xl:pl-[147px] lg:pl-20 pl-6 lg:pr-0 pr-6">
          <h3 className="text-quaternary sm:max-w-none max-w-[35ch] lg:text-start text-center sm:text-[32px] text-[20px] sm:leading-[39px] leading-[24px] font-bold sm:w-[25ch] w-full">
            ¿Porqué es importante la inclusión financiera en latinoamerica?
          </h3>
          <p className="sm:pr-0 pr-1 max-w-[39ch] lg:self-start w-full text-[#595959] sm:text-[18px] text-[16px] sm:leading-[21.95px] leading-[19.5px] font-normal">
            El Salvador tiene una población de 6.3 millones y el 77%, 4.9
            millones, no tiene acceso a una cuenta corriente o de ahorro, 5.5
            millones* no tienen acceso a créditos. Somos la mejor opción
            disponible para la inclusión y apoyo financiero.
          </p>
        </div>

        <div className="bg-[#24364B] w-full py-4 my-4 relative">
          <p className="lg:max-w-[53ch] max-w-[44ch] lg:mx-0 mx-auto w-full xl:pl-36 lg:pl-20 pl-6 lg:pr-0 pr-6 text-white sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light">
            La población de Texas es de 31.1 millones, de los cuales 12.5
            millones son latinos y de esos 500 mil son Salvadoreños. 1.7
            millones* de personas no tienen cuenta corriente o de ahorro.
          </p>

          <div className="bg-[#24364B] absolute h-full w-[60px] left-[100%] top-0 z-0 lg:block hidden">
            <div className="bg-white absolute w-[267px] h-[267px] rounded-[50%] left-[8.9%] top-[-64%]" />
          </div>
        </div>

        <p className="xl:ml-36 lg:ml-20 ml-6 lg:mr-0 mr-10 text-[13px] leading-[15.85px] italic font-light">
          *Entre ambos mercados tenemos 7.2 millones de clientes potenciales.
        </p>
      </motion.div>

      <motion.img
        src="/dedication/img_1.png"
        alt="img-dedication"
        className="lg:w-[700px] w-[331.42px] relative z-10"
        variants={fadeInFromXY(250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
      />
    </div>
  );
};

export default FirstSection;
