import styled from "styled-components";
import image3 from "@assets/4.png";

export default styled.section`
  /* height: 8vh; */
  color: #c56e33;
  background-color: white;
  overflow: hidden;

  .all {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 14rem;
    margin-top: 14rem;
    overflow: hidden;
  }
  img {
    width: 35rem;
    /* margin: 2rem; */
    margin-bottom: 0rem;
    margin-left: 10rem;
  }
  h2 {
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-decoration: underline;
  }
  span {
    color: #551e19;
  }

  a {
    color: #551e19;
  }
  p {
    margin: 0.5rem;
    font-size: 1.2rem;
    padding-left: 25%;
    width: 50%;
    display: flex;
    flex-direction: column;
    vertical-align: center;
    text-align: justify;
    margin-bottom: 0rem;
  }
  .texte {
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;
    margin: auto;
  }

  .footer {
    background-image: url(${image3});
    display: flex;
    justify-content: center;
    margin-bottom: 0rem;
    margin-top: 0;
    height: 7rem;
  }

  .content {
    position: relative;
  }
  .leaves {
    position: absolute;
  }
  .leaf1 {
    position: absolute;
    font-size: 70px;
    top: 0;
    animation: fall 5s linear infinite;
  }

  .leaf2 {
    position: absolute;
    font-size: 55px;
    top: 0;
    animation: fall2 6s linear infinite;
  }

  .leaf3 {
    position: absolute;
    font-size: 40px;
    top: -400px;
    left: -100px;
    animation: fall 4s linear infinite 1s;
  }

  .leaf4 {
    position: absolute;
    font-size: 45px;
    top: -400px;
    left: 300px;
    animation: fall2 4s linear infinite 1.5s;
  }

  .leaf5 {
    position: absolute;
    font-size: 55px;
    top: -410px;
    left: 250px;
    animation: fall3 4s linear infinite 2s;
  }

  @keyframes fall {
    0% {
      top: -410px;
      transform: translateX(-100px) rotateX(180deg);
    }
    100% {
      top: 400px;
      transform: translateX(250px) rotateX(-180deg);
    }
  }

  @keyframes fall2 {
    0% {
      top: -410px;
      transform: translateX(50px) rotateX(-90deg);
    }
    100% {
      top: 400px;
      transform: translateX(-350px) rotateX(180deg);
    }
  }

  @keyframes fall3 {
    0% {
      top: -430px;
      transform: translateX(0px) rotateX(-180deg);
    }
    100% {
      top: 400px;
      transform: translateX(-400px) rotateX(180deg);
    }
  }

  @keyframes fall4 {
    0% {
      top: -430px;
      transform: translateX(0px) rotateY(-180deg);
    }
    100% {
      top: 400px;
      transform: translateX(-400px) rotateY(180deg);
    }
  }

  @keyframes fall5 {
    0% {
      top: -410px;
      transform: translateX(-100px) rotateY(180deg);
    }
    100% {
      top: 400px;
      transform: translateX(250px) rotateY(-180deg);
    }
  }

  .leaf6 {
    position: absolute;
    font-size: 55px;
    top: -410px;
    left: -250px;
    animation: fall3 4s linear infinite 1.5s;
  }

  .leaf7 {
    position: absolute;
    font-size: 35px;
    top: -410px;
    left: -350px;
    animation: fall2 5s linear infinite 0.5s;
  }

  .leaf8 {
    position: absolute;
    font-size: 75px;
    top: -430px;
    left: 550px;
    animation: fall3 5s linear infinite 0.5s;
  }

  .leaf9 {
    position: absolute;
    font-size: 35px;
    top: -430px;
    left: 150px;
    animation: fall4 6s linear infinite 0.3s;
  }

  .leaf10 {
    position: absolute;
    font-size: 55px;
    top: -430px;
    left: 450px;
    animation: fall5 3.7s linear infinite 1.3s;
  }

  .leaf11 {
    position: absolute;
    font-size: 55px;
    top: -430px;
    left: 650px;
    animation: fall5 4.7s linear infinite 1.7s;
  }
`;
