import { useState, useEffect } from "react";

const useCounter = (ForwardCounter = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ForwardCounter) setCounter((prevCounter) => prevCounter + 1);
      else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [ForwardCounter]);
  return counter;
};
export default useCounter;
