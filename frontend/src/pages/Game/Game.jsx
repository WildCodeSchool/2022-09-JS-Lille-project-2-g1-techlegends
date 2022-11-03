import cleanDatas from "@assets/mapper";
import Response from "@components/button/Button";
import Video from "@components/video/Video";
import { useState } from "react";
import GameStyle from "./Style";

export default function Game() {
  const [songs, setSongs] = useState([]);
  const getData = () => {
    setSongs(cleanDatas);
  };
  return (
    <GameStyle>
      <button type="button" onClick={getData}>
        Lancer le jeu
      </button>
      {songs[0] ? (
        <>
          {songs.map((element) => (
            <Video
              source={`https://www.youtube.com/watch?v=${element.videoId}`}
            />
          ))}
          {songs.map((element) => (
            <Response
              valueOne={element.title}
              valueTwo={element.title}
              valueThree={element.title}
              valueFour={element.title}
            />
          ))}
        </>
      ) : (
        <li>Relancer le jeu</li>
      )}
    </GameStyle>
  );
}
