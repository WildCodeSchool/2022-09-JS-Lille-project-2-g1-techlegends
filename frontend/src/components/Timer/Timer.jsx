import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function Countdown(props) {
  const { startingMinutes = 0, startingSeconds = 5 } = props;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  const navigate = useNavigate();

  // const notime = () =>
  //   toast.warning("LE TEMPS EST FINI JEUNE CABILLOT !", {
  //     position: toast.POSITION.TOP_LEFT,
  //   });

  // const redirection = () => {
  //   notime();
  //   navigate("/score");

  // }

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
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {mins === 0 && secs === 0 ? (
        navigate("/score")
      ) : (
        <p>
          {" "}
          {mins} : {secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
}
Countdown.propTypes = {
  startingMinutes: PropTypes.number.isRequired,
  startingSeconds: PropTypes.number.isRequired,
};
