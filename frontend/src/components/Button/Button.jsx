import { useState } from "react";
import PropTypes from "prop-types";
import Style from "./style";

export default function Button({ value, answerId }) {
  const [isActive, setActive] = useState(false);

  const goodAnswer = () => {
    if (answerId === value) {
      setActive(!isActive);
      alert("Bonne réponse");
    } else {
      setActive(isActive);
      alert("Mauvaise réponse");
    }
  };
  return (
    <Style>
      <button type="button" onClick={goodAnswer}>
        {value}
      </button>
    </Style>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
  answerId: PropTypes.string.isRequired,
};
