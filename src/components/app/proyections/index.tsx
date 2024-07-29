import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  appearFromCenterScale,
  fadeInFromTop,
} from "../../../animations/animations";
import DataNumbers from "./data-numbers";
import DonutChart from "./donut-chart";
import ColumnChart from "./column-chart";

interface Props {
  id: string;
}
const Proyections = ({ id }: Props) => {
  const [proyectionsRef, proyectionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [chartsRef, chartsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-[50.5px] mt-[-50.5px]" id={id}>
      <div
        ref={proyectionsRef}
        className="sm:bg-primary bg-white sm:bg-opacity-[5%] opacity-100 px-5 pt-24 pb-[247px]"
      >
        <motion.h3
          variants={fadeInFromTop}
          initial="initial"
          animate={proyectionsInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mx-auto max-w-[15ch] text-center font-nanum-myeongjo text-tertiary font-semibold sm:text-[65px] text-[32px] sm:leading-[56px] leading-[30.94px] tracking-[0.024rem]"
        >
          Verri Capital Investments, LLC
        </motion.h3>
        <motion.p
          variants={fadeInFromTop}
          initial="initial"
          animate={proyectionsInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light max-w-[80ch] text-center mx-auto my-[39px]"
        >
          <span className="font-semibold text-quaternary">
            Somos un conglomerado Americano
          </span>{" "}
          que invierte en sus subsidiarías, bajo una estricta política interna
          de evaluación,
          <span className="font-semibold text-quaternary">
            {" "}
            con analistas capacitados y un puntaje propio.
          </span>{" "}
          Nuestras subsidiarías ofrecen microcréditos a individuos que
          normalmente no tienen acceso al sistema bancario tradicional.
        </motion.p>
        <DataNumbers />
        <motion.div
          variants={appearFromCenterScale}
          initial="initial"
          animate={chartsInView ? "animate" : "initial"}
          transition={{ duration: 0.25, ease: "easeIn", delay: 1 }}
          ref={chartsRef}
          className="lg:flex-row flex-col flex items-center justify-center gap-28"
        >
          {chartsInView && <DonutChart />} <ColumnChart />
        </motion.div>
      </div>
    </section>
  );
};

export default Proyections;
