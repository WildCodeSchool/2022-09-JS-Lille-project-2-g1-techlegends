import styled from "styled-components";
import image from "@assets/Transistor.png";

export default styled.section`
  height: 95vh;
  background-color: purple;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  .playingGame {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 20%;
    margin: auto;
    margin-bottom: 10rem;
    margin-top: 5rem;
    font-size: 1.5rem;
    background-color: #c56e33;
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #e5e5e5;
    box-shadow: 0px 0px 10px 0px #551e19;
  }
  .playingGame:hover {
    background-color: #551e19;
    border: #c56e33 solid 2px;
  }
  .Countdown {
    text-align: center;
    width: 15%;
    margin: auto;
    font-size: 1.5rem;
    background-color: #c56e33;
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #e5e5e5;
    box-shadow: 0px 0px 10px 0px #551e19;
    display: block;
    position: fixed;
    left: 75%;
    top: 40%;
  }
  .score {
    text-align: center;
    width: 15%;
    margin: auto;
    font-size: 1.5rem;
    background-color: #c56e33;
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #e5e5e5;
    box-shadow: 0px 0px 10px 0px #551e19;
    display: block;
    position: fixed;
    left: 10%;
    top: 40%;
  }
`;
