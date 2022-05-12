import { useRef } from "react";

export const useDebounce = () => {
  const timerRef = useRef(null);

  return (fn, timer) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      fn();
    }, timer);
  };
};
