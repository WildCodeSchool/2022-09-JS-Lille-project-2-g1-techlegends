import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";
import Header from "@components/Header/Header";
import "reset-css";
import MainStyle from "./style";

function App() {
  return (
    <MainStyle>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </MainStyle>
  );
}

export default App;
