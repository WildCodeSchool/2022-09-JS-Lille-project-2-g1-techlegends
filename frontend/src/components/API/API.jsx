import cleanDatas from "@assets/mapper";
import { useState } from "react";
import Styled from "./style";

export default function API() {
  const [songs, setSongs] = useState([]);
  const getData = () => {
    const shuffle = [];

    for (let i = 0; i < 4; i += 1) {
      shuffle.push(cleanDatas[Math.floor(Math.random() * cleanDatas.length)]);
    }

    setSongs(shuffle);
  };
  const regex = /\(.*\)|\[.*\]/;

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
            src={`https://www.youtube.com/embed/${
              songs[Math.floor(Math.random() * songs.length)].videoId
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {songs.map((element) => (
            <li>
              {element.title
                .replace(regex, "")
                .replaceAll("&#39;", "'")
                .replaceAll("&amp;", "&")
                .replaceAll("&quot;", '"')}
            </li>
          ))}

          <button type="button" onClick={getData}>
            Question suivante
          </button>
        </>
      ) : (
        <li>Actualisez la page</li>
      )}
    </Styled>
  );
}
