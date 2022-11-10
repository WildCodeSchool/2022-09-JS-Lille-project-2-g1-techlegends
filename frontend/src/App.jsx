import Toast from "@components/API/Toast";
import Home from "@pages/Home/Home";
import Rules from "@pages/Rules/Rules";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";
import "reset-css";
import MainStyle from "./style";

function App() {
  return (
    <MainStyle>
      <Home />
      <Toast />
      <Rules />
      <Game />
      <Score />
    </MainStyle>
  );
}

export default App;
