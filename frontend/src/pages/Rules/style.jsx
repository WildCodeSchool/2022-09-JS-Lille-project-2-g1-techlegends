import styled from "styled-components";

export default styled.section`
  height: 95vh;
  color: #c56e33;

  h2 {
    text-align: center;
    font-size: 1.5rem;
  }

  span {
    color: #551e19;
  }

  .Welcome {
    margin: 8rem;
    display: block;
    margin-left: 15%;
    margin-right: 15%;
  }

  div.rightLeft {
    display: flex;
  }

  .left,
  .right {
    /* padding: 0 4rem; */
    margin-top: 12%;
    border-radius: 5px;
    display: flex;
    flex-direction: wrap;
  }
  .left {
    margin-right: 12%;
    width: 100%;
  }
  .right {
    width: 100%;
  }
  .rightLeft {
    width: 50%;
    margin: auto;
  }
`;
