import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import cx from "../../libs/cx";

interface DataPoint {
  year: string;
  Capital: number;
  Crecimiento: number;
}

interface Colors {
  [key: string]: string[];
}

const StackedColumnWithLineChart = () => {
  const [finish, setFinish] = useState<boolean>(false);
  const tooltipRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: {
      Capital: 0,
      Crecimiento: 0,
      percentage: "0",
    },
  });

  const width = 925;
  const height = 450;
  const axesRef = useRef(null);
  const boundsWidth = width - 25;
  const boundsHeight = height;

  const data: DataPoint[] = [
    { year: "2020", Capital: 180, Crecimiento: 0 },
    { year: "2021", Capital: 188, Crecimiento: 57 },
    { year: "2022", Capital: 215, Crecimiento: 63 },
    { year: "2023", Capital: 249, Crecimiento: 75 },
    { year: "2024", Capital: 365, Crecimiento: 62 },
    { year: "2025", Capital: 425, Crecimiento: 0 },
  ];

  const colors: Colors = {
    "2020": ["#fff", "#fff"],
    "2021": ["#0684A6", "#0684A633"],
    "2022": ["#5B9AE3", "#5B9AE333"],
    "2023": ["#EE7623", "#EE762333"],
    "2024": ["#24364B", "#24364B33"],
    "2025": ["#fff", "#fff"],
  };

  const keys: (keyof DataPoint)[] = ["Capital", "Crecimiento"];

  const allGroups = data.map((d) => d.year);

  const getMaxValue = (
    data: DataPoint[],
    keys: (keyof DataPoint)[]
  ): number => {
    return (
      d3.max(
        data.flatMap((d) => keys.map((key) => d[key])),
        (value) => value as number
      ) ?? 0
    );
  };

  const max = getMaxValue(data, keys);

  const xScale = useMemo(
    () =>
      d3
        .scaleBand<string>()
        .domain(allGroups)
        .range([0, boundsWidth])
        .padding(0.2),
    [allGroups, boundsWidth]
  );

  const yScale = useMemo(
    () => d3.scaleLinear().domain([0, max]).range([boundsHeight, 0]),
    [boundsHeight, max]
  );

  const stack = d3.stack<DataPoint>().keys(keys);
  const series = stack(data);

  const lineData = data.map((d) => ({
    year: d.year,
    value: d.year === "2024" ? d.Capital : d.Capital + d.Crecimiento,
  }));

  const lineGenerator = d3
    .line<{ year: string; value: number }>()
    .x((d) => {
      const x = xScale(d.year);
      return x !== undefined ? x + (xScale.bandwidth() ?? 0) / 2 : 0;
    })
    .y((d) => yScale(d.value))
    .curve(d3.curveLinear);

  const handleMouseEnter = (year: string) => {
    d3.selectAll(`[data-year="${year}"]`).style("opacity", 0.5);
  };

  const handleMouseLeave = (year: string) => {
    d3.selectAll(`[data-year="${year}"]`).style("opacity", 1);
  };

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    // X Axis
    const xAxisGenerator = d3.axisBottom(xScale);
    const xAxis = svgElement
      .append("g")
      .attr("transform", `translate(0,${boundsHeight - 35})`)
      .attr("color", "white")
      .style("font-size", "16px")
      .style("font-family", "Montserrat")
      .style("font-weight", "550")
      .style("line-height", "19px")
      .call(xAxisGenerator);

    // Hide X axis line and ticks
    xAxis.selectAll(".domain").remove(); // Remove axis line
    xAxis.selectAll(".tick line").remove(); // Remove tick lines
    const tickTexts = xAxis.selectAll(".tick text").nodes();

    xAxis
      .selectAll(".tick text")
      .filter((_, i) => i === 0 || tickTexts.length - 1 === i) // Select all other text
      .style("opacity", 0);

    const yAxisGenerator = d3.axisLeft(yScale);
    const yAxis = svgElement.append("g").call(yAxisGenerator);
    yAxis.selectAll(".tick text").style("opacity", 0); // Hide tick text

    // Hide Y axis line and ticks
    yAxis.selectAll(".domain").remove(); // Remove axis line
    yAxis.selectAll(".tick line").remove(); // Remove tick lines
  }, [xScale, yScale, boundsHeight]);

  return (
    <>
      <div className="w-[125%] sm:w-full lg:w-[150%] lg:translate-x-[15%] xl:translate-x-[10%] overflow-hidden relative">
        <svg viewBox="0 0 900 450">
          <g className="relative">
            {series.map((layer, layerIndex) => (
              <g key={layerIndex}>
                {layer.map((d, groupIndex) => {
                  const year = d.data.year;
                  const color = colors[year][layerIndex];
                  const dataPoint = data.find((item) => item.year === year);
                  const capital = dataPoint?.Capital ?? 0;
                  const crecimiento = dataPoint?.Crecimiento ?? 0;
                  return (
                    <motion.rect
                      key={groupIndex}
                      x={xScale(year)}
                      y={yScale(d[1])}
                      data-year={year}
                      width={xScale.bandwidth()}
                      height={yScale(d[0]) - yScale(d[1])}
                      fill={color}
                      className={cx(
                        groupIndex === 0 || layer.length - 1 === groupIndex
                          ? "hidden"
                          : ""
                      )}
                      onMouseMoveCapture={(e) => {
                        handleMouseEnter(year);
                        const x = e.pageX;
                        const y = e.pageY;
                        const total = capital + crecimiento;
                        const percentage = (
                          (crecimiento / total) *
                          100
                        ).toFixed(2);

                        setTooltip({
                          visible: true,
                          x: x,
                          y: y,
                          data: {
                            Capital: capital,
                            Crecimiento: crecimiento,
                            percentage,
                          },
                        });
                      }}
                      onMouseOut={() => {
                        handleMouseLeave(year);
                        setTooltip({ ...tooltip, visible: false });
                      }}
                      initial={{ y: 1000, opacity: 1 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1,
                        delay: groupIndex * 0.3,
                      }}
                    />
                  );
                })}
              </g>
            ))}

            {/* Line */}
            <motion.path
              d={lineGenerator(lineData) ?? ""}
              fill="none"
              stroke="#006580"
              strokeWidth={2}
              initial={{
                opacity: 0.5,
                strokeDashoffset: 1000,
                strokeDasharray: 1000,
              }}
              animate={{
                opacity: 1,
                strokeDashoffset: 0,
                strokeDasharray: finish ? "5 5" : "1000",
                transition: {
                  duration: 1.1,
                  ease: "easeIn",
                  delay: 1.1,
                  onComplete: () => {
                    setFinish(true);
                  },
                },
              }}
            />

            {/* Points on the line */}
            {lineData.map((d, i) => {
              const xValue = xScale(d.year);
              const yValue = yScale(d.value);

              if (xValue === undefined || yValue === undefined) {
                console.warn(
                  `Scale function returned undefined for d.year: ${d.year} or d.value: ${d.value}`
                );
                return null;
              }

              const cx = xValue + xScale.bandwidth() / 2;

              return (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={yValue}
                  r={4}
                  fill="#006580"
                  className={
                    i === 0 || lineData.length - 1 === i ? "hidden" : ""
                  }
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: "100%",
                    transition: {
                      duration: 1,
                      ease: "easeIn",
                      delay: 1.5,
                    },
                  }}
                />
              );
            })}
          </g>

          <g ref={axesRef} />
        </svg>
        <p className="absolute top-[10%] w-[25ch] left-[50%] translate-x-[-70%] 2xl:text-3xl xl:text-[24px]  xl:leading-[29.26px] lg:text-lg md:text-2xl min-[450px]:text-lg text-xs text-[#24364B] font-semibold">
          Crecimiento anual de{" "}
          <span className="xl:text-[28px] 2xl:text-3xl xl:leading-[34.13px] lg:text-lg md:text-2xl min-[450px]:text-xl text-sm font-bold">
            35%
          </span>
        </p>
      </div>
      {tooltip.visible && (
        <div
          ref={tooltipRef}
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            padding: "8px",
          }}
          className="rounded-[8px] z-[9999] opacity-85 bg-white border-[1px] border-[#ddd] pointer-events-none absolute translate-y-[-50%] xl:text-sm sm:text-xs text-[10px] leading-[14px]"
        >
          <div>
            <span className="font-bold">Capital:</span> {tooltip.data?.Capital}
          </div>
          <div>
            <span className="font-bold">Crecimiento:</span>{" "}
            {tooltip.data?.Crecimiento}
          </div>
          <div>
            <span className="font-bold">Porcentaje: </span>{" "}
            {tooltip.data?.percentage}%
          </div>
        </div>
      )}
    </>
  );
};

export default StackedColumnWithLineChart;
