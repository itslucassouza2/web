import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (elementRef.current) {
        console.log(elementRef.current.contains(target));
        !elementRef.current.contains(target) && callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, false);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside, false);
  }, [callback]);

  return elementRef;
};
