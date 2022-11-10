import styled from "styled-components";
import image from "@assets/Transistor.png";

export default styled.section`
  height: 95vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  img {
    width: 640px;
    height: 360px;
    position: relative;
    top: 20%;
  }
`;
