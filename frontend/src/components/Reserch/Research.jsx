import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResearchStyle from "./Style";

export default function Research() {
  const lunchGame = () =>
    toast(
      <ResearchStyle>
        <input type="text" placeholder="Artiste, style,..." />
        <button type="submit">Jouer</button>
      </ResearchStyle>
    );
  return (
    <>
      <button type="button" onClick={lunchGame}>
        Blind test
      </button>
      <ToastContainer />
    </>
  );
}
