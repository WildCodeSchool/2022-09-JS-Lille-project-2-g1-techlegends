import styled from "styled-components";

export default styled.article`
  display: flex;
  color: #c56e33;

  span {
    font-weight: bold;
    color: #551e19;
  }

  .right,
  .left {
    margin: auto;
    padding: 5rem;
  }

  li {
    list-style: none;
    padding: 0.5rem;
  }

  h4 {
    margin: 0.5rem;
  }

  .right,
  h4 {
    font-size: 1.25rem;
  }

  .left {
    border-left: solid 1px #551e19;
  }

  ul {
    padding: 0 1rem;
  }
`;
