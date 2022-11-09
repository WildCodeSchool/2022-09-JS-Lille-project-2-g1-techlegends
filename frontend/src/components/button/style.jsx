import styled from "styled-components";

export default styled.section`
  position: relative;
  top: 10%;
  display: flex;
  justify-content: center;

  div.right,
  div.left {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 30%;
  }
  button {
    position: relative;
    top: 25vh;
    margin: 1rem;
    opacity: 0.75;
    border: solid 1px transparent;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px #0000006e;
    
  }

  @media (max-width: 768px) {
    button {
      /* border: solid 3px red; */
      display: flex;
      justify-content: center;
    }
    .response {
      display: flex;
      flex-direction: column; */
    }
  }
`;
