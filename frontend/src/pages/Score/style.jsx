import styled from "styled-components";
import image3 from "@assets/4.png";

export default styled.section`
  height: 90vh;
  color: #c56e33;

  h2 {
    text-align: center;
    font-size: 1.3rem;
    padding: 2rem 0;
  }
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
