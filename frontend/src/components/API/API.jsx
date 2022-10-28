import axios from "axios";
import { useState } from "react";
import Styled from "./style";

export default function API() {
  const [datas, setDatas] = useState([]);
  const [songs] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=official%20music%20video&type=video&key=${
          import.meta.env.YoutubeKey
        }`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setDatas(data.items);
      });
  };
  const questionSongs = [];
  if (datas) {
    datas.map((element) => songs.push(element));
    for (let i = 0; i < 4; i += 1) {
      questionSongs.push(songs[Math.floor(Math.random() * songs.length)]);
    }
  }

  return (
    <Styled>
      <button type="button" onClick={getData}>
        Récupérer les données
      </button>
      {questionSongs[0] ? (
        <>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${questionSongs[0].id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {questionSongs.map((element) => (
            <li>{element.snippet.title.replace("Official Music Video", "")}</li>
          ))}
        </>
      ) : (
        <li>Actualisez la page</li>
      )}
    </Styled>
  );
}
