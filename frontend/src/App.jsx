import API from "@components/API/API";
import Home from "@pages/Home";

import "reset-css";

import MainStyle from "./style";

function App() {
  return (
    <MainStyle>
      <Home />
      <API />
    </MainStyle>
  );
}

export default App;
