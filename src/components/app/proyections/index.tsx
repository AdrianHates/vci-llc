import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInFromTop } from "../../../animations/animations";
import DataNumbers from "./data-numbers";

interface Props {
  id: string;
}
const Proyections = ({ id }: Props) => {
  const [proyectionsRef, proyectionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });  

  return (
    <section
      ref={proyectionsRef}
      className="sm:bg-primary bg-white sm:bg-opacity-[5%] opacity-100 px-5 pt-24 pb-40"
      id={id}
    >
      <motion.h3
        variants={fadeInFromTop}
        initial="initial"
        animate={proyectionsInView ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="mx-auto max-w-[15ch] text-center font-nanum-myeongjo text-tertiary font-semibold sm:text-[64px] text-[32px] sm:leading-[55px] leading-[30.94px]"
      >
        Verri Capital Investments, LLC
      </motion.h3>
      <motion.p
        variants={fadeInFromTop}
        initial="initial"
        animate={proyectionsInView ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light max-w-[80ch] text-center mx-auto my-10"
      >
        <span className="font-semibold text-quaternary">
          Somos un conglomerado Americano
        </span>{" "}
        que invierte en sus subsidiarías, bajo una estricta política interna de
        evaluación,
        <span className="font-semibold text-quaternary">
          {" "}
          con analistas capacitados y un puntaje propio.
        </span>{" "}
        Nuestras subsidiarías ofrecen microcréditos a individuos que normalmente
        no tienen acceso al sistema bancario tradicional.
      </motion.p>
      <DataNumbers />
    </section>
  );
};

export default Proyections;
