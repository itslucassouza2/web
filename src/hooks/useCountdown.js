import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

const getTime = (date) => {
  const expirationDate = dayjs(date);
  const currentDate = new Date();

  const diff = dayjs.duration(expirationDate.diff(currentDate));

  return {
    days: diff.days(),
    hours: diff.hours(),
    minutes: diff.minutes(),
    seconds: diff.seconds(),
  };
};

export const useCountdown = (date) => {
  const [difference, setDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDifference(getTime(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return difference;
};
