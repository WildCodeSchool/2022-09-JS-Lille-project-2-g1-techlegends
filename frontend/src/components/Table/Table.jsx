import AllPlayerScore from "@components/AllPlayerScore/AllPlyerScore";
import { useEffect, useState } from "react";
import axios from "axios";
import TableStyle from "./style";

export default function Table() {
  const [score, setScore] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(({ data }) => {
      setScore(data);
    });
  });

  return (
    <TableStyle>
      <div className="right">
        <h4>Votre Score</h4>
        <p>
          <span>X</span>pts
        </p>
      </div>
      <div className="left">
        <h4>Meilleur Score</h4>
        {score.map((data) => {
          return <AllPlayerScore key={data.id} scoreData={data} />;
        })}
      </div>
    </TableStyle>
  );
}
