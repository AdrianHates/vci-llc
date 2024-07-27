import { useEffect, useState } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const endValue = end;
    const increment = endValue / (duration / 10);

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        clearInterval(timer);
        setCount(endValue);
      } else {
        setCount(Math.round(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

export default useCountUp;
