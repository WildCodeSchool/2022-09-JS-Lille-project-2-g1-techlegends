import Button from "@components/button/Button";
import Video from "@components/video/Video";
import GameStyle from "./Style";

export default function Game() {
  return (
    <GameStyle>
      <Video />
      <Button />
    </GameStyle>
  );
}
