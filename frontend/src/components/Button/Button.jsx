import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Button({ value, answerId }) {
  const [isActive, setActive] = useState(false);
  const notify = () =>
    toast.success("GOOD", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  const notify2 = () =>
    toast.error(`VA CHERCHER TON OREILLE ! La bonne réponse est ${answerId}`, {
      position: toast.POSITION.BOTTOM_LEFT,
    });

  const goodAnswer = () => {
    if (answerId === value) {
      setActive(!isActive);
      notify();
    } else {
      setActive(isActive);
      notify2();
    }
  };
  return (
    <button type="button" onClick={goodAnswer}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  answerId: PropTypes.string.isRequired,
};
