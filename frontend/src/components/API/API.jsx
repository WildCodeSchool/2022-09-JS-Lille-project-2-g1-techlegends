import Button from "@components/Button/Button";
import cleanDatas from "@assets/mapper";
import { useState } from "react";
import Countdown from "@components/API/count";
import Styled from "./style";

export default function API() {
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
    <Styled>
      <button type="button" onClick={getData}>
        Lancer la partie
      </button>

      {songs[0] ? (
        <>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${answerId.videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {songs.map((element) => (
            <Button
              answerId={answerId.title}
              value={element.title}
              counter={counter}
              setCounter={setCounter}
              getData={getData}
            />
          ))}

          <Countdown />

          <p> SCORE : {counter === 0 ? "0 point" : `${counter} points!`} </p>
        </>
      ) : (
        <li>Actualisez la page</li>
      )}
    </Styled>
  );
}
