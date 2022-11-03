import ReactPlayer from "react-player";
import ScreenStyle from "./style";

export default function Screen(source) {
  return (
    <ScreenStyle>
      <ReactPlayer url={source} />
    </ScreenStyle>
  );
}
