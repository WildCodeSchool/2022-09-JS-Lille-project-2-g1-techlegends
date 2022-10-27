import axios from "axios";
import { useState } from "react";
import Styled from "./style";

export default function API() {
  const [datas, setDatas] = useState();
  const getData = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=official%20music%20video&type=video&key=AIzaSyAKm75e4EGMjYvtPd1vSw1Anp-HvuUsFig"
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setDatas(data.items);
      });
  };
  getData();
  return (
    datas && (
      <Styled>
        {datas.map((element) => (
          <>
            <li key={element.etag}>{element.snippet.title}</li>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${element.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        ))}
      </Styled>
    )
  );
}
