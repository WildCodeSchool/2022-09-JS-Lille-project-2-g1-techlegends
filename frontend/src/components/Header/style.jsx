import styled from "styled-components";
import Radioclassic from "@assets/RumbleBrave.otf";
import image3 from "@assets/7.png";

export default styled.nav`
  color: #c56e33;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    background-image: url(${image3});
  }

  li {
    display: flex;
    flex-direction: column;

    height: 2rem;
    list-style: none;
    font-size: 1.3rem;
    text-align: center;
    padding: 0.4rem;
    color: white;
    font-weight: bold;
    /* font-family:myFirstFont; */
    text-decoration-color: #551e19;
    border-left: 0.2rem outset white;
    border-right: 0.2rem solid white;
  }

  /* span {
    color: #551e19;
  } */

  @font-face {
    font-family: myFirstFont;
    src: url(${Radioclassic});
  }
`;
