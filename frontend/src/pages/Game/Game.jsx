import Button from "@components/button/Button";
import Video from "@components/video/Video";
import image from "@assets/Onde.jpg";
import GameStyle from "./Style";

export default function Game() {
  return (
    <GameStyle>
      <img src={image} alt="Onde radio" />
      <Video />
      <Button />
    </GameStyle>
  );
}
