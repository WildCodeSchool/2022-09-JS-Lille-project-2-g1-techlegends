import { useNavigate } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { useState } from "react";
import NavStyle from "./style";

export default function Headerphone() {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  return (
    <NavStyle>
      <ul>
        <Menu
          right
          width="100vw"
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
          <button
            type="button"
            onClick={() => {
              closeSideBar();
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              closeSideBar();
              navigate("/game");
            }}
          >
            Blind Test
          </button>
          <button
            type="button"
            onClick={() => {
              closeSideBar();
              navigate("/score");
            }}
          >
            Score
          </button>
        </Menu>
      </ul>
    </NavStyle>
  );
}
