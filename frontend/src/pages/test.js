import axios from "axios";
import { useState } from "react";
import Styled from "../components/API/style";

export default function API() {
  const [songs, setSongs] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&q=official%20music%20video&key=${
          import.meta.env.VITE_YoutubeKey
        }`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSongs(data.items);
      });
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
              {element.snippet.title
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
