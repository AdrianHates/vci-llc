import { useInView } from "react-intersection-observer";
import cx from "../../libs/cx";
import CountUp from "../../ui/count-up";
import { motion } from "framer-motion";
import { appearFromCenterScale } from "../../../animations/animations";

const dataNumbers: {
  name: string;
  number: number;
  symbol: string;
  className?: string;
}[] = [
  {
    name: "Créditos Aprobados",
    number: 395,
    symbol: "+",
    className: "lg:w-[202px]",
  },
  {
    name: "Años de Experiencia",
    number: 4,
    symbol: "+",
    className: "lg:w-[207px]",
  },
  {
    name: "Rentabilidad Neta",
    number: 49.41,
    symbol: "%",
    className: "lg:w-[227.26px]",
  },
  {
    name: "Personas Beneficiadas",
    number: 200,
    symbol: "+",
    className: "lg:w-[250px]",
  },
];

const DataNumbers = () => {
  const [dataNumbersRef, dataNumbersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      variants={appearFromCenterScale}
      initial="initial"
      animate={dataNumbersInView ? "animate" : "initial"}
      transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
      className="flex xl:justify-center justify-between xl:gap-[87px] gap-0 py-[72px]"
      ref={dataNumbersRef}
    >
      {dataNumbers &&
        dataNumbersInView &&
        dataNumbers.map((dataNumber, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={cx(
                "text-secondary xl:text-[64.55px] xl:leading-[78.68px] md:text-5xl sm:text-3xl text-xl font-bold w-auto flex justify-center",
                i !== 0 ? "flex-row-reverse" : "flex-row",
                dataNumber.className
              )}
            >
              <p>{dataNumber.symbol}</p>
              <CountUp
                number={dataNumber.number}
                isPercentage={dataNumber.symbol === "%" ? true : false}
              />
            </div>

            <p className="lg:text-[20px] text-center lg:leading-[24.38px] sm:text-sm text-[6px] leading-[7.12px] font-medium text-[#535967]">
              {dataNumber.name}
            </p>
          </div>
        ))}
    </motion.div>
  );
};

export default DataNumbers;
