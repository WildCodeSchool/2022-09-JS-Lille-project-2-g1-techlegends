import { useEffect, useState } from "react";
import axios from "axios";

export default function PersonnalScore() {
  const [score, setScore] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/1").then(({ data }) => {
      setScore(data);
    });
  }, []);
  return (
    <p>
      <span>{score.score}</span>pts
    </p>
  );
}
