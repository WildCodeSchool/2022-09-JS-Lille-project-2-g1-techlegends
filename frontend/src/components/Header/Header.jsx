import { Link } from "react-router-dom";
import NavStyle from "./style";

export default function Header() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Blind Test</Link>
        </li>
        <li>
          <Link to="/score">Score</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
