import styled from "styled-components";
import StormGust from "../../assets/storm_gust/Storm_Gust.woff";
import StormGust2 from "../../assets/storm_gust/Storm_Gust.ttf";

export default styled.nav`
  color: #c56e33;
  height: 12vh;
  @font-face {
    font-family: "StormGust";
    src: local("StormGust"), local("StormGust"),
      url(${StormGust}) format("woff"), url(${StormGust2}) format("ttf");
  }
  font-family: "StormGust", Arial;

  ul {
    display: flex;
    justify-content: space-evenly;
    height: 10vh;
    flex-flow: nowrap;
  }

  li {
    list-style: none;
  }

  a {
    padding: 1rem;
    background-color: #bf6734;
    border-radius: 1rem;
    width: 25vw;
    text-decoration: none;
    color: white;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }

  a:hover {
    background-color: #591b1b;
  }
`;
