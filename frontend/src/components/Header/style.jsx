import styled from "styled-components";

export default styled.nav`
  color: #c56e33;

  ul {
    display: flex;
    justify-content: space-evenly;
    height: 10vh;
    flex-flow: nowrap;
  }

  li {
    list-style: none;
    padding: 1.5rem;
    width: 25vw;
    background-color: #bf6734;
    border-radius: 1rem;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  a {
    padding: 1.5rem;
    width: 25vw;
    text-decoration: none;
    color: white;
  }

  li:hover {
    background-color: #591b1b;
  }
`;
