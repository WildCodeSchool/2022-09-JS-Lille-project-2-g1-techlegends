import styled from "styled-components";
import image3 from "@assets/4.png";

export default styled.section`
  color: #c56e33;

  .footer {
    background-image: url(${image3});
    display: flex;
    justify-content: center;
    margin-bottom: 0rem;
    margin-top: 0rem;
    height: 7rem;
  }

  @media screen and (max-width: 768px) {
    background-color: white;
    height: 100%;
    h2 {
      display: none;
    }

    .footer {
      display: none;
    }
  }
`;
