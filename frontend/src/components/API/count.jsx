import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function Countdown(props) {
  const { startingMinutes = 1, startingSeconds = 30 } = props;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  const notime = () =>
    toast.warning("LE TEMPS EST FINI JEUNE CABILLOT !", {
      position: toast.POSITION.TOP_LEFT,
    });
  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
      if (secs === 0 && mins === 0) {
        notime();
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {mins === 0 && secs === 0 ? (
        ""
      ) : (
        <p>
          {" "}
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
}
Countdown.propTypes = {
  startingMinutes: PropTypes.number.isRequired,
  startingSeconds: PropTypes.number.isRequired,
};
