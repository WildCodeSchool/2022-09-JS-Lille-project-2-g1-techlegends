import TableStyle from "./style";

export default function Table() {
  return (
    <TableStyle>
      <div className="left">
        <h4>Votre Score</h4>
        <p>
          <span className="points">X</span>pts
        </p>
      </div>

      <div className="right">
        <h4>Meilleurs Scores</h4>
        <ul>
          <li>
            <span className="key">♫</span>P2France :{" "}
            <span className="pts">1780 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Vous:<span>1655 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Hervé: <span>1523 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Sax59: <span>1522 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Asma: <span>1500 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Guenk: <span>1495 pts</span>
          </li>
          <li>
            <span className="key">♫</span>FbouchezPro: <span>1467 pts</span>
          </li>
          <li>
            <span className="key">♫</span>FaeLnBros: <span>1456 pts</span>
          </li>
          <li>
            <span className="key">♫</span>Barbu: <span>1398 pts</span>
          </li>
          <li>
            <span className="key">♫</span>azahire: <span>1200 pts</span>
          </li>
          <li>
            <span className="key">♫</span>LadyBugs:{" "}
            <span>err 404 Not Found</span>
          </li>
        </ul>
      </div>
    </TableStyle>
  );
}
