import styled from "styled-components";

export default styled.section`
  position: relative;
  top: 25%;
  display: flex;
  justify-content: center;

  div.right,
  div.left {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  button {
    margin: 1rem;
    opacity: 0.75;
    border: solid 1px transparent;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px #000000;
  }
`;
