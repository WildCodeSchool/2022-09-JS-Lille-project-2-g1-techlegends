import styled from "styled-components";
import image3 from "@assets/14.png";
import image5 from "@assets/16.png";

export default styled.article`
  background-color: #f4f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #c56e33;
  margin-right: -5rem;

  span {
    font-weight: bold;
    color: #551e19;
    background-color: #f4f4f6;
  }
  .right,
  .left {
    padding: 5rem;
    background-color: #f4f4f6;
  }
  li {
    margin-left: 5rem;
    list-style: none;
    padding: 0.5rem;
    background-color: #f4f4f6;
    font-size: 1.2rem;
  }

  .points {
    margin-left: 20rem;
  }
  h4 {
    background-color: #f4f4f6;
  }

  .right h4 {
    margin-top: 3rem;
    margin-bottom: 7rem;
  }
  .right,
  h4 {
    height: 0vh;
    margin-top: -6%;
    margin-bottom: 13%;
    margin-left: 28rem;
    font-size: 1.6rem;
    margin-right: 0rem;
    width: 15rem;
    font-weight: bold;
    background-color: #f4f4f6;
  }

  .left {
    height: 22vh;
    margin-top: 11%;
    margin-bottom: 9.2%;
    background-size: contain;
    background-image: url(${image3});
    background-repeat: no-repeat;
    margin-right: 29rem;
    margin-left: 2rem;
    padding-right: 0rem;
    background-color: #f4f4f6;
  }

  .left h4 {
    margin-right: 2rem;
    margin-left: 22rem;
    margin-bottom: 11rem;
    width: 12rem;
  }

  .left p {
    text-align: center;
    font-size: 1.5rem;
  }

  .right p {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-right: -16rem;
  }

  .right {
    background-color: #f4f4f6;
    height: 22vh;
    background-repeat: no-repeat;
    margin-top: 6rem;
    margin-bottom: 8%;
    background-image: url(${image5});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 9rem;
    padding-left: 0rem;
    width: 60rem;
  }

  ul {
    padding-left: -1rem;
    font-size: 1rem;
    padding-top: -4rem;
    margin-left: 10rem;
    margin-top: -5rem;
    height: 30rem;
  }

  ul {
    padding: 0 1rem;
  }

  li {
    background-color: #f4f4f6;
    margin-left: 10rem;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 768px) {
    background-color: white;
    height: 100vh;
    width: 100vw;
    justify-content: space-evenly;
    .points {
      margin-left: initial;
    }

    span {
      font-weight: bold;
      color: #551e19;
      background-color: white;
      margin-top: 3%;
    }
    flex-direction: column;
    .right,
    .left {
      margin: auto;
      padding: 0rem;
      border: none;
    }
    li {
      text-align: center;
    }
    h4 {
      margin-top: 10vh;
    }

    .left,
    .right {
      background-image: none;
    }
    .points {
      text-align: center;
      font-size: 1.5rem;
    }

    .right,
    h4 {
      height: initial;
      margin-top: initial;
      margin-bottom: 3vh;
      margin-left: initial;
      font-size: 1.6rem;
      margin-right: initial;
      width: initial;
      text-align: center;
      background-color: white;
    }

    .left {
      height: initial;
      margin-top: initial;
      margin-bottom: initial;
      margin-right: initial;
      margin-left: initial;
      padding-right: initial;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      background-color: white;
    }

    .left h4 {
      margin-right: initial;
      margin-left: initial;
      margin-bottom: initial;
      width: initial;
      background-color: white;
    }

    .right {
      background-color: white;
      height: initial;
      margin-top: initial;
      margin-bottom: initial;
      margin-left: initial;
      padding-left: initial;
      width: initial;
    }

    ul {
      padding-left: initial;
      font-size: initial;
      padding-top: initial;
      margin-left: initial;
      margin-top: initial;
      height: initial;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 50vh;
    }

    ul {
      padding: initial;
    }

    li {
      margin-left: initial;
      margin-bottom: initial;
      background-color: white;
    }
  }
`;
