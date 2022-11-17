import { NavLink } from "react-router-dom";
import NavStyle from "./style";

export default function Header() {
  const activeStyle = {
    backgroundColor: "#591b1b",
  };
  return (
    <NavStyle>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blind Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/score"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Score
          </NavLink>
        </li>
      </ul>
    </NavStyle>
  );
}
