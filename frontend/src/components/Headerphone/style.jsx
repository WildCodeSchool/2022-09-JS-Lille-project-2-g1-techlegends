import styled from "styled-components";
import image3 from "@assets/7bis.jpg";
import Radioclassic from "@assets/RumbleBrave.otf";

export default styled.nav`
  @font-face {
    font-family: myFirstFont;
    src: url(${Radioclassic});
  }
  nav {
    height: 100vh;
  }
  button {
    color: white;
    margin: 22vh auto;
    font-size: 3rem;
    font-family: "myFirstFont";
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
  li {
    display: flex;
    flex-direction: column;

    text-align: center;
    padding: 0.4rem;
    color: white;
    font-weight: bold;
    margin-top: 20vh;
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 4vw;
    top: 4vh;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a7a7a7;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
  }

  /* General sidebar styles */
  .bm-menu {
    background: url(${image3}) no-repeat;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #5f2525;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #f2f2f2;
    height: 100vh;
    overflow: hidden;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: #f2f2f2(0, 0, 0, 0.3);
  }
`;
