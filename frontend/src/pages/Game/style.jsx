import styled from "styled-components";
import image from "@assets/Transistor.png";
import image3 from "@assets/13.jpg";
import image4 from "@assets/14.jpg";
import image5 from "@assets/15.jpg";
import image04 from "@assets/4.png";

export default styled.section`
  height: 90vh;
  overflow: hidden;
  color: whitesmoke;
  background-color: whitesmoke;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  .allstyle {
    background-color: whitesmoke;
  }
  .playingGame {
    -webkit-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulsing 3s cubic-bezier(0.66, 0, 0, 1);
    animation: pulsing 1.25s 3 cubic-bezier(0.66, 0, 0, 1);

    transition: all 300ms ease-in-out;

    background-image: url(${image5});
    background-color: whitesmoke;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    /* background-color: #c56e33; */
    border: #551e19 2px solid;
    border-radius: 5px;
    color: whitesmoke;
    box-shadow: 0px 0px 10px 0px #551e19;
  }

  .playingGame:hover {
    cursor: pointer;
  }
  a.playingGame:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: whitesmoke;
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
    width: 17%;
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

  .footer {
    background-image: url(${image04});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 0rem;
    margin-top: 35rem;
    height: 7rem;
  }

  img {
    display: none;
  }

  @media screen and (max-width: 1440px) {
    height: 100vh;
  }

  @media screen and (max-width: 768px) {
    background-image: none;
    img {
      display: initial;
      width: 60%;
      padding: 0;
      z-index: -1;
      margin: 3% 20%;
    }
    .footer {
      display: none;
    }
    height: 100vh;

    .score {
      position: fixed;
      left: 10%;
      top: 80px;
      font-size: 0.8rem;
      background-image: none;
    }
    .Countdown {
      position: fixed;
      left: 75%;
      top: 80px;
      font-size: 1rem;
      background-image: none;
    }
    article:nth-child(3) {
      position: fixed;
    }
  }
`;
