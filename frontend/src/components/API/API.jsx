import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";
import Styled from "./style";

export default function API() {
  const [datas, SetDatas] = useState([]);
  const getData = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=official%20music%20video&type=video&key=AIzaSyCm7q9wrUPRGABUb-mtODNo5Eiad9Btdh0"
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        SetDatas(data.items);
      });
  };
  return (
    datas && (
      <Styled>
        <button type="button" onClick={getData}>
          Récupérer les données
        </button>
        {datas.map((element) => (
          <div key={element.etag}>
            <li>{element.snippet.title}</li>
            <ReactPlayer
              url={`https://www.youtube.com/embed/${element.id.videoId}`}
            />
          </div>
        ))}
      </Styled>
    )
  );
}
