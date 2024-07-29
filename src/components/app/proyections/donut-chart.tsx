import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import cx from "../../libs/cx";

const DonutChart = () => {
  const options: ApexOptions = {
    stroke: {
      show: true,
      curve: "straight",
      lineCap: "butt",
      colors: ["#f2f3f4"],
      width: 10,
      dashArray: 0,
    },
    chart: {
      background: "transparent",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 2000,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 2000,
        },
      },
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40px",
          labels: {
            show: false,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
        startAngle: 190,
        endAngle: -170, // Ajusta el ángulo de inicio del gráfico
      },
    },
    labels: ["Mujeres", "Hombres"],
    colors: ["#EE8F4D", "#63abfd"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [70, 30];

  const classHistory: { contain: string; line?: string }[] = [
    {
      contain: "absolute top-0 sm:flex hidden flex-col gap-3",
    },
    {
      contain: "absolute left-[95%] top-1/2 sm:flex hidden flex-col gap-3",
      line: "border-l-0 border-r-[3px] relative right-[75%]",
    },
  ];
  return (
    <div className="relative w-[400px] my-[85px]">
      <Chart
        options={options}
        series={series}
        type="donut"
        width={400}
        height={400}
      />
      {series &&
        series.map((serie, i) => (
          <div key={i} className={cx("", classHistory[i].contain)}>
            <p className="text-[24.91px] leading-[30.37px] font-normal">
              {options?.labels?.[i]}
            </p>
            <p
              style={{ color: options?.colors?.[i] }}
              className="font-bold text-[24.3px] leading-[29.62px]"
            >
              {serie} %
            </p>
            <div
              className={cx(
                "ml-7 border-l-[3px] border-b-[3px] border-[#24364B] h-[41.52px] w-[98.61px]",
                classHistory[i].line
              )}
            />
          </div>
        ))}
    </div>
  );
};

export default DonutChart;
