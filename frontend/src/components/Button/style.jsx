import styled from "styled-components";
import image3 from "@assets/12.jpg";

export default styled.article`
  .buttonRepsonse {
    background-image: url(${image3});
    background-size: 2.7rem;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: center;
    width: 32%;
    margin: auto;
    margin-top: 1.3rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: whitesmoke;
    border: #551e19 2px solid;
    border-radius: 10px;
    color: #cd9664;
    box-shadow: 0px 0px 10px 0px #551e19;
  }
  .buttonRepsonse:hover {
    background-color: #551e19;
    border: #c56e33 solid 2px;
  }

  @media screen and (max-width: 768px) {
    .buttonRepsonse {
      height: 8vh;
      margin-top: 9%;
      font-size: 1rem;
      z-index: 1;
      background-image: none;
    }
  }
`;
