import "./App.css";
import Home from "@pages/Home/Home";
import Rules from "@pages/Rules/Rules";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";

function App() {
  return (
    <div className="App">
      <Home />
      <Rules />
      <Game />
      <Score />
    </div>
  );
}

export default App;
