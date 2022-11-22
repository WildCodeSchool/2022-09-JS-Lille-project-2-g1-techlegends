import PropTypes from "prop-types";
import TableStyle from "./style";

export default function Table({ user, score }) {
  return (
    <TableStyle>
      <div className="right">
        <h4>Félicitation {user} vous avez marquer</h4>
        <p>
          <span>{score}</span>pts
        </p>
      </div>
      <div className="left">
        <h4>Meilleur Score</h4>
        <ul>
          <li>
            P2France : <span>1780 pts</span>
          </li>
          <li>
            Vous:<span>1655 pts</span>
          </li>
          <li>
            Hervé: <span>1523 pts</span>
          </li>
          <li>
            Sax59: <span>1522 pts</span>
          </li>
          <li>
            Asma: <span>1500 pts</span>
          </li>
          <li>
            Guenk: <span>1495 pts</span>
          </li>
          <li>
            FbouchezPro: <span>1467 pts</span>
          </li>
          <li>
            FaeLnBros: <span>1456 pts</span>
          </li>
          <li>
            Barbu: <span>1398 pts</span>
          </li>
          <li>
            azahire: <span>1200 pts</span>
          </li>
          <li>
            LadyBugs: <span>err 404 Not Found</span>
          </li>
        </ul>
      </div>
    </TableStyle>
  );
}

Table.propTypes = {
  user: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
