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
    className: "w-[202px]",
  },
  {
    name: "Años de Experiencia",
    number: 4,
    symbol: "+",
    className: "w-[207px]",
  },
  {
    name: "Rentabilidad Neta",
    number: 49.41,
    symbol: "%",
    className: "w-[227.26px]",
  },
  {
    name: "Comunidad Beneficiada",
    number: 200,
    symbol: "+",
    className: "w-[250px]",
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
      className="sm:flex-row flex-col flex items-center justify-center gap-[87px] py-[72px]"
      ref={dataNumbersRef}
    >
      {dataNumbers &&
        dataNumbersInView &&
        dataNumbers.map((dataNumber, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-1"
          >
            <div
              className={cx(
                "text-secondary text-[64.55px] leading-[78.68px] font-bold w-[250px] flex justify-center",
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

            <p className="text-[20px] leading-[24.38px] font-medium text-[#535967]">
              {dataNumber.name}
            </p>
          </div>
        ))}
    </motion.div>
  );
};

export default DataNumbers;
