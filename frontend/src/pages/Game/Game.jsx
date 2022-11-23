import PropTypes from "prop-types";
import Countdown from "@components/Timer/Timer";
import Toast from "@components/Toastify/Toast";
import Response from "@components/Button/Response";
import Video from "@components/Video/Video";
import { useEffect, useState } from "react";
import axios from "axios";
import image from "@assets/Transistorimg.png";
import GameStyle from "./style";

export default function Game({ searchValue, counter, setCounter }) {
  const [songs, setSongs] = useState([]);
  const [answerId, setAnswerId] = useState("");
  const [cleanDatas, setCleanDatas] = useState([]);

  const keyWord = searchValue.replaceAll(" ", "%20");

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&q=official%20music%20video%20${keyWord}&key=${
          import.meta.env.VITE_YoutubeKey
        }`
      )
      .then(({ data }) => {
        setCleanDatas(data.items);
      });
  }, []);

  const getData = () => {
    const shuffle = [];
    const randomindexes = [];
    while (randomindexes.length < 4) {
      const randomindex = Math.floor(Math.random() * cleanDatas.length);
      if (randomindexes.includes(randomindex) === false) {
        randomindexes.push(randomindex);
      }
    }
    for (let i = 0; i < 4; i += 1) {
      shuffle.push(cleanDatas[randomindexes[i]]);
    }
    setSongs(shuffle);
    setAnswerId(shuffle[Math.floor(Math.random() * shuffle.length)]);
  };
  return (
    <GameStyle ClassName="allstyle">
      <button
        type="button"
        aria-label="button"
        className="playingGame"
        onClick={getData}
      />
      {songs[0] ? (
        <>
          <Toast />
          <Video
            source={`https://www.youtube.com/watch?v=${answerId.id.videoId}?autoplay=1&start=30`}
          />
          {songs.map((element) => (
            <Response
              answerId={answerId.snippet.title}
              value={element.snippet.title}
              counter={counter}
              setCounter={setCounter}
              getData={getData}
              key={element.id.videoId}
            />
          ))}

          <div className="score">
            <p> SCORE : {counter === 0 ? "0 point" : `${counter} points !`} </p>{" "}
          </div>
          <div className="Countdown">
            <Countdown />
          </div>
        </>
      ) : (
        <li />
      )}
      <img className="transistor" alt="transistor" src={image} />
      <section className="footer" />
    </GameStyle>
  );
}

Game.propTypes = {
  searchValue: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};
