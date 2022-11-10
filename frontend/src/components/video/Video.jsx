import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import ScreenStyle from "./style";

export default function Screen({ source }) {
  return (
    <ScreenStyle>
      <ReactPlayer url={source} playing />
    </ScreenStyle>
  );
}
Screen.propTypes = {
  source: PropTypes.string.isRequired,
};
