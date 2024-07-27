import { useInView } from "react-intersection-observer";
import Icon_Text from "../../shared/icon_text";
import { motion } from "framer-motion";
import { fadeInFromX } from "../../../animations/animations";

const SecondSection = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  /*const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });*/

  return (
    <div className="sm:pl-16 pl-12 sm:pr-0 pr-12 flex sm:flex-row flex-col-reverse pt-[75px] pb-[78px] relative sm:gap-0 gap-10">
      <Icon_Text
        variants={fadeInFromX(0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        className="sm:pr-5 pr-3 sm:pl-2.5 pl-[7.49px] sm:py-1.5 py-[4.5px] rounded-[8.28px] absolute bottom-[48px] sm:left-[31.4%] left-[22.5%] gap-2 bg-white"
        class_text="max-w-[35ch] sm:text-[13.5px] text-[8.99px] sm:leading-[14.63px] leading-[10.96px] font-[400]"
        class_icon="sm:w-[36px] w-[26.97px] sm:h-[36px] h-[26.97px]"
        icon_path="/dedication/dedication_icon_1.svg"
        text="Este tipo de cliente y crédito representan un riesgo mucho menor para nosotros, ya que han demostrado un excelente comportamiento y moral de pago."
      />

      <motion.img
        variants={fadeInFromX(-500, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        ref={firstRef}
        src="/dedication/img_2.png"
        alt="dedication_img_2"
        className="w-[679.13px]"
      />
      <motion.div
        variants={fadeInFromX(500, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        className="flex flex-col gap-3 w-full sm:ml-[-15px] ml-0 justify-center"
      >
        <h3 className="text-quaternary font-bold sm:text-[32px] text-[20px] sm:leading-[39.01px] leading-[24.38px] mb-7">
          ¡Impacto positivo!
        </h3>

        <p className="text-[#595959] font-medium sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] w-full max-w-[45ch] mt-3.5">
          Más del 50% de nuestros créditos han sido otorgados a personas que
          viven fuera de las capitales financieras de El Salvador y Texas.
        </p>

        <div className="bg-[#24364B] px-3 py-3.5 text-white font-light text-[16px] leading-[19.5px]">
          <p className="max-w-[48ch]">
            Recientemente hemos visto un incremento en clientes que optan por
            más de un crédito, esto quiere decir que son clientes recurrentes
            que han pagado su crédito y necesitan uno nuevo o necesitan capital
            adicional.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondSection;
