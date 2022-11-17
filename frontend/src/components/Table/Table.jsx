import AllPlayerScore from "@components/AllPlayerScore/AllPlyerScore";
import { useEffect, useState } from "react";
import axios from "axios";
import PersonnalScore from "@components/PersonnalScore/PersonnalScore";
import TableStyle from "./style";

export default function Table() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(({ data }) => {
      setScores(data);
    });
  });

  return (
    <TableStyle>
      <div className="right">
        <h4>Votre Score</h4>
        <PersonnalScore />
      </div>
      <div className="left">
        <h4>Meilleur Score</h4>
        {scores.map((data) => {
          return <AllPlayerScore key={data.id} scoreData={data} />;
        })}
      </div>
    </TableStyle>
  );
}
