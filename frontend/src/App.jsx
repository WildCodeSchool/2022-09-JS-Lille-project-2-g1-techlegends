import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Game from "@pages/Game/Game";
import Score from "@pages/Score/Score";
import Header from "@components/Header/Header";
import "reset-css";
import { useMediaQuery } from "react-responsive";
import Headerphone from "@components/Headerphone/Headerphone";
import MainStyle from "./style";

function App() {
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
        <Route path="/game" element={<Game />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </MainStyle>
  );
}

export default App;
