import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Style from "./style";

export default function Button({
  value,
  answerId,
  counter,
  setCounter,
  getData,
}) {
  const regex = /\(.*\)|\[.*\]/;
  const [isActive, setActive] = useState(false);
  const notify = () =>
    toast.success("GOOD", {
      position: toast.POSITION.TOP_LEFT,
    });
  const notify2 = () =>
    toast.error(
      `VA CHERCHER TON OREILLE ! La bonne réponse est ${answerId
        .replace(regex, "")
        .replaceAll("&#39;", "'")
        .replaceAll("&amp;", "&")
        .replaceAll("&quot;", '"')}`,
      {
        position: toast.POSITION.TOP_LEFT,
      }
    );

  const goodAnswer = () => {
    if (answerId === value) {
      setActive(!isActive);
      notify();
      setCounter(counter + 100);
      getData();
    } else {
      notify2();
      setActive(isActive);
      setCounter(counter - 20);
      getData();
    }
  };
  return (
    <Style>
      <button type="button" className="buttonRepsonse" onClick={goodAnswer}>
        {value
          .replace(regex, "")
          .replaceAll("&#39;", "'")
          .replaceAll("&amp;", "&")
          .replaceAll("&quot;", '"')}
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
