import React, { useState, useEffect } from "react";

export const Countdown = ({ startTime }) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      if (time <= 0) clearInterval(counterInterval);
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, [startTime, time]);

  return <span className="inline">{time}</span>;
};
