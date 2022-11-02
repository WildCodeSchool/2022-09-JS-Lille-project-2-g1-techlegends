import cleanDatas from "@assets/mapper";
import { useState } from "react";
import Styled from "./style";

export default function API() {
  const [songs, setSongs] = useState([]);
  const getData = () => {
    setSongs(cleanDatas);
  };
  const regex = /\(.*\)|\[.*\]/;

  return (
    <Styled>
      <button type="button" onClick={getData}>
        Récupérer les données
      </button>

      {songs[0] ? (
        <>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${songs[0].videoId}`}
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
        </>
      ) : (
        <li>Actualisez la page</li>
      )}
    </Styled>
  );
}
