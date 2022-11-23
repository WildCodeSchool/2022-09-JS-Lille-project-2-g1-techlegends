import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Home from "@pages/Home/Home";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";
import Header from "@components/Header/Header";
import Headerphone from "@components/Headerphone/Headerphone";
import Pregame from "@pages/Pregame/Pregame";
import "reset-css";
import MainStyle from "./style";

function App() {
  const [user, setUser] = useState("Unknow");
  const [searchValue, setSearchValue] = useState("");
  const [score, setScore] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <MainStyle>
      {isDesktopOrLaptop && <Header />}
      {isTabletOrMobile && <Headerphone />}
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
          element={<Game searchValue={searchValue} setScore={setScore} />}
        />
        <Route path="/score" element={<Score score={score} user={user} />} />
      </Routes>
    </MainStyle>
  );
}

export default App;
