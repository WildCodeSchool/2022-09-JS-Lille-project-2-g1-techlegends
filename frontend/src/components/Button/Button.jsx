import { useState } from "react";
import PropTypes from "prop-types";
import Style from "./style";

export default function Button({
  value,
  answerId,
  counter,
  setCounter,
  getData,
}) {
  const [isActive, setActive] = useState(false);

  const goodAnswer = () => {
    if (answerId === value) {
      setActive(!isActive);
      alert("Bonne réponse");
      setCounter(counter + 100);
      getData();
    } else {
      setActive(isActive);
      alert("Mauvaise réponse");
      getData();
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
  getData: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};
