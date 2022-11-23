import { NavLink } from "react-router-dom";
import NavStyle from "./style";

export default function Header() {
  return (
    <NavStyle>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pregame">Blind Test</NavLink>
        </li>
        <li>
          <NavLink to="/score">Score</NavLink>
        </li>
      </ul>
    </NavStyle>
  );
}
