import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function Countdown({ counter }) {
  const [mins, setMinutes] = useState(1);
  const [secs, setSeconds] = useState(30);

  const navigate = useNavigate();

  const notime = () =>
    toast.warning(
      `LE TEMPS EST FINI JEUNE CABILLOT !      Retrouve ton score de ${counter} points dans le tableau des scores!`,
      {
        position: toast.POSITION.TOP_LEFT,
      }
    );

  const redirection = () => {
    setTimeout(() => navigate("/score"), 120000);
    return "";
  };

  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 1) {
        if (mins === 0) {
          notime();
        }
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
        redirection()
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
  counter: PropTypes.number.isRequired,
};
