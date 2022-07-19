import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Countdown = ({ startTime, endCallback }) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      if (time <= 0) {
        clearInterval(counterInterval);
        endCallback();
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, [startTime, time, endCallback]);

  return <span className="inline">{time}</span>;
};

Countdown.propTypes = {
  startTime: PropTypes.number.isRequired,
  endCallback: PropTypes.func,
};

export default Countdown;
