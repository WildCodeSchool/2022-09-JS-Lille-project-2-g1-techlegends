import API from "@components/API/API";
import Home from "@pages/Home";

import MainStyle from "./style";
import ResetCSS from "./ResetCSS";

function App() {
  return (
    <ResetCSS>
      <MainStyle>
        <Home />
        <API />
      </MainStyle>
    </ResetCSS>
  );
}

export default App;
