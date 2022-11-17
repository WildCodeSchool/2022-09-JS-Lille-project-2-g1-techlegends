import styled from "styled-components";
import image from "@assets/Transistor.png";
import image3 from "@assets/13.jpg";
import image4 from "@assets/14.jpg";
import image5 from "@assets/15.jpg";

export default styled.section`
  height: 95vh;
  background-color: whitesmoke;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  .playingGame {
    -webkit-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    animation: pulsing 1.25s 3 cubic-bezier(0.66, 0, 0, 1);

    transition: all 300ms ease-in-out;

    background-image: url(${image5});
    background-size: 8rem;
    align-items: center;
    background-repeat: no-repeat;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 8rem;
    margin: auto;
    margin-bottom: 5rem;
    margin-top: 5rem;
    font-size: 1.5rem;
    /* background-color: #c56e33; */
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #e5e5e5;
    box-shadow: 0px 0px 10px 0px #551e19;
  }

  a.playingGame:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: #ffffff;
  }

  /* Animation */

  @-webkit-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-moz-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-ms-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @keyframes pulsing {
    to {
      btransition: all 300ms ease-in-out;
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  /* .playingGame:hover {
    background-color: #551e19;
    border: #c56e33 solid 2px;
  } */
  .Countdown {
    background-image: url(${image4});
    background-size: 2.7rem;
    align-items: center;
    background-repeat: no-repeat;
    text-align: center;
    height: 3rem;
    width: 15%;
    margin: auto;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #ffffff;
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #cd9664;
    box-shadow: 0px 0px 10px 0px #551e19;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: center;
    position: fixed;
    left: 75%;
    top: 40%;
  }
  .score {
    background-image: url(${image3});
    background-size: 2.7rem;
    background-repeat: no-repeat;
    text-align: center;
    height: 3rem;
    width: 15%;
    font-weight: bold;
    margin: auto;
    font-size: 1.2rem;
    background-color: #ffffff;
    border: #551e19 2px solid;
    border-radius: 5px;
    color: #cd9664;
    box-shadow: 0px 0px 10px 0px #551e19;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    vertical-align: center;
    position: fixed;
    left: 10%;
    top: 40%;
  }
`;
