import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";
import Header from "@components/Header/Header";
import "reset-css";
import Pregame from "@pages/Pregame/Pregame";
import { useState } from "react";
import MainStyle from "./style";

function App() {
  const [user, setUser] = useState("Unknow");
  const [searchValue, setSearchValue] = useState("");
  const [score, setScore] = useState(0);
  return (
    <MainStyle>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pregame"
          element={
            <Pregame
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              searchValue={searchValue}
              user={user}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route path="/score" element={<Score score={score} user={user} />} />
      </Routes>
    </MainStyle>
  );
}

export default App;
