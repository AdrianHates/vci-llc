import useCountUp from "../../hooks/useCountUp";

interface CountUpProps {
  number: number;
  isPercentage: boolean;
}

const CountUp = ({ number, isPercentage = false }: CountUpProps) => {
  const endValue = isPercentage ? number * 100 : number;
  const count = useCountUp(endValue);
  return <p>{isPercentage ? (count / 100).toFixed(2) : count}</p>;
};

export default CountUp;
