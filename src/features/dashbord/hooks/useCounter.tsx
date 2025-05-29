import { useState } from "react";

// Custom hook
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => prev - 1);
  const resetCounter = () => setCounter(initialValue);

  return { counter, incrementCounter, decrementCounter, resetCounter };
};
