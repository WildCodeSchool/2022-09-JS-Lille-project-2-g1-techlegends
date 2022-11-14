import styled from "styled-components";
import image from "@assets/Transistor.png";

export default styled.section`
  height: 95vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  img {
    /* width: 640px;
    height: 360px;
    position: relative;
    top: 20%; */
  }
  .PlayButton {
    height: 6rem; 
    width: auto;
    border-radius: 5px;
    background-color: #c56e33;

    }
    /* 
    button {
    height: 2rem;
    width: 50rem;
    margin: 1%;
    background-color: #c56e33;
    border: #551e19 2px solid;
    border-radius: 5px;
    margin-left: 20% ;
  } */
`;
