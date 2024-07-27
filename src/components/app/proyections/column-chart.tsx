import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 450,
      stacked: true,
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2021", "2022", "2023", "2024"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    fill: {
      opacity: 1,
    },

    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "Capital",
      data: [
        {
          x: "2021",
          y: 188,
          fillColor: "#0684A6",
        },
        {
          x: "2022",
          y: 215,
          fillColor: "#5B9AE3",
        },
        {
          x: "2023",
          y: 250,
          fillColor: "#EE7623",
        },
        {
          x: "2024",
          y: 365,
          fillColor: "#24364B",
        },
      ],
    },
    {
      name: "Crecimiento",
      data: [
        {
          x: "2021",
          y: 57,
          fillColor: "#0684A62E",
        },
        {
          x: "2022",
          y: 64,
          fillColor: "#5B9AE32E",
        },
        {
          x: "2023",
          y: 74,
          fillColor: "#EE76232E",
        },
        {
          x: "2024",
          y: 62,
          fillColor: "#24364B2E",
        },
      ],
    },
  ];
  const colors = [
    "#0684A6",
    "#5B9AE3",
    "#EE7623",
    "#24364B",
    "#0684A62E",
    "#5B9AE32E",
    "#EE76232E",
    "#24364B2E",
  ];

  return (
    <div className="column-chart relative">
      <p className="absolute top-[20%] left-0 text-[24px] leading-[29.26px] text-[#24364B] font-semibold">
        Crecimiento anual{" "}
        <span className="text-[28px] leading-[34.13px] font-bold">35%</span>
      </p>
      <Chart
        options={{ ...options, colors }}
        series={series}
        type="bar"
        width={500}
        height={450}
      />
    </div>
  );
};

export default ColumnChart;
