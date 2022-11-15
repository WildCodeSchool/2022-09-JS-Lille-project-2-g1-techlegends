import cleanDatas from "@assets/mapper";
import Countdown from "@components/Timer/Timer";
import Toast from "@components/Toastify/Toast";
import Response from "@components/Button/Response";
import Video from "@components/Video/Video";
import { useState } from "react";
import GameStyle from "./style";

export default function Game() {
  const [songs, setSongs] = useState([]);
  const [answerId, setAnswerId] = useState("");
  const [counter, setCounter] = useState(0);

  const getData = () => {
    const shuffle = [];

    for (let i = 0; i < 4; i += 1) {
      shuffle.push(cleanDatas[Math.floor(Math.random() * cleanDatas.length)]);
    }

    setSongs(shuffle);

    setAnswerId(shuffle[Math.floor(Math.random() * shuffle.length)]);
  };
  return (
    <GameStyle>
      <button type="button" onClick={getData}>
        Lancer le jeu
      </button>
      {songs[0] ? (
        <>
          <Toast />
          <Video
            source={`https://www.youtube.com/watch?v=${answerId.videoId}?autoplay=1?start=30`}
          />
          {songs.map((element) => (
            <Response
              answerId={answerId.title}
              value={element.title}
              counter={counter}
              setCounter={setCounter}
              getData={getData}
            />
          ))}
          <p> SCORE : {counter === 0 ? "0 point" : `${counter} points!`} </p>
          <Countdown />
        </>
      ) : (
        <li>Relancer le jeu</li>
      )}
    </GameStyle>
  );
}
