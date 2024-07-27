import cx from "../../libs/cx";
import CountUp from "../../ui/count-up";

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
  return (
    <div className="flex items-center justify-center gap-[87px] py-[72px]">
      {dataNumbers &&
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
    </div>
  );
};

export default DataNumbers;
