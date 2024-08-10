import { useRef, useEffect } from "react";
import * as d3 from "d3";
import cx from "../../libs/cx";

interface Props {
  dictionary: {
    keys: string[];
  };
}

interface DonutData {
  label: string;
  value: number;
}

const dataValues: number[] = [70, 30];

const DonutChart = ({ dictionary }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const data: DonutData[] = dictionary.keys.map((key, i) => ({
    label: key,
    value: dataValues[i],
  }));

  const colors = ["#ee8f4d", "#63abfd"];
  const width = 500;
  const height = 350;
  const margin = 50;
  const radius = Math.min(width, height) / 2 - margin;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.label))
      .range(colors);

    const pie = d3
      .pie<DonutData>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(radius * 0.45)
      .outerRadius(radius)
      .padAngle(0);

    const arcInitial = d3
      .arc<d3.PieArcDatum<DonutData>>()

      .innerRadius(radius * 0.45)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(0);

    const arcUpdated = d3
      .arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(radius * 0.45)
      .outerRadius(radius)
      .padAngle(0.1);

    const arcHover = d3
      .arc<d3.PieArcDatum<DonutData>>()
      .innerRadius(radius * 0.45)
      .outerRadius(radius * 1.2)
      .padAngle(0.1);

    const pieData = pie(data);

    const tooltip = d3.select(tooltipRef.current);

    const paths = svg
      .selectAll<SVGPathElement, d3.PieArcDatum<DonutData>>("path")
      .data(pieData, (d) => d.data.label)
      .enter()
      .append("path")
      .attr("d", arcInitial)
      .attr("fill", (d) => color(d.data.label))
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", (d) => arcHover(d as d3.PieArcDatum<DonutData>))
          .style("filter", "brightness(120%)");
        tooltip
          .style("opacity", 0.85)
          .html(`<strong>${d.data.label}</strong><br>Value: ${d.data.value}%`)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY}px`);
      })
      .on("mousemove", function (event) {
        // Actualizar la posición del tooltip
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", (d) => arcUpdated(d as d3.PieArcDatum<DonutData>))
          .style("filter", "brightness(100%)");
        tooltip.style("opacity", 0);
      });

    paths
      .transition()
      .duration(2500)
      .attrTween("d", function (d) {
        const interpolate = d3.interpolate<d3.PieArcDatum<DonutData>>(
          {
            startAngle: 0,
            endAngle: 0,
            padAngle: 0,
            innerRadius: 0,
            outerRadius: 0,
          },
          d
        );
        return (t: number) => {
          const interpolatedDatum = interpolate(t);
          return arc(interpolatedDatum) as string;
        };
      })
      .on("end", function () {
        svg
          .selectAll("path")
          .transition()
          .duration(500)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .attrTween("d", function (d: any) {
            const start = arc(d) || "";
            const end = arcUpdated(d) || "";

            const interpolate = d3.interpolateString(start, end);

            return function (t: number): string {
              return interpolate(t);
            };
          });
      });

    svg.attr(
      "transform",
      `translate(${width / 2 - margin}, ${height / 2}) rotate(180)`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const series = [70, 30];

  const classHistory: { contain: string; line?: string }[] = [
    {
      contain:
        "absolute top-1/2 translate-y-[-100%] left-1/2 translate-x-[-175%] lg:translate-x-[-150%] xl:translate-x-[-175%] 2xl:translate-x-[-200%] sm:flex hidden flex-col gap-3",
    },
    {
      contain:
        "absolute top-1/2 translate-y-[-25%] lg:translate-y-[-50%] left-1/2 translate-x-[150%] lg:translate-x-[140%] 2xl:translate-x-[150%] sm:flex hidden flex-col gap-3",
      line: "border-l-0 border-r-[3px] relative right-[75%]",
    },
  ];

  return (
    <>
      <div className="lg:w-[90%] w-[100%] lg:h-[100%] lg:self-end relative lg:translate-x-[15%]">
        <svg
          ref={svgRef}
          viewBox="0 0 400 350"
          className="lg:w-[100%] w-[100%] lg:h-[100%] lg:self-end"
        />

        {series &&
          series.map((serie, i) => (
            <div key={i} className={cx("", classHistory[i].contain)}>
              <p className="text-[24.91px] leading-[30.37px] font-normal">
                {data[i]?.label}
              </p>
              <p
                style={{ color: colors?.[i] }}
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
      <div
        ref={tooltipRef}
        style={{
          transition: "opacity .3s",
        }}
        className="xl:text-sm text-xs rounded-[8px] absolute z-[100] opacity-0 bg-white border-[1px] border-[#ddd] p-2 pointer-events-none"
      />{" "}
    </>
  );
};

export default DonutChart;
