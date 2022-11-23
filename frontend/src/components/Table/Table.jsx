import { useEffect, useState } from "react";
import AllPlayerScore from "@components/AllPlayerScore/AllPlyerScore";
import axios from "axios";
import PropTypes from "prop-types";
import TableStyle from "./style";

export default function Table({ user, score }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(({ data }) => {
      setScores(data);
    });
  });

  return (
    <TableStyle>
      <div className="right">
        <h4>
          Félicitations <span className="superuser">{user}</span> vous êtes un
          winner !
        </h4>
        <p>
          <span>{score}</span>pts
        </p>
      </div>
      <div className="left">
        <h4>Meilleurs Scores :</h4>
        <ul>
          {scores.map((data) => {
            return <AllPlayerScore key={data.id} scoreData={data} />;
          })}
        </ul>
      </div>
    </TableStyle>
  );
}

Table.propTypes = {
  user: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
