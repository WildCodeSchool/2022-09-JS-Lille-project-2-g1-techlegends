import Home from "./pages/Home";

import MainStyle from "./style";
import ResetCSS from "./ResetCSS";

function App() {
  return (
    <ResetCSS>
      <MainStyle>
        <Home />
      </MainStyle>
    </ResetCSS>
  );
}

export default App;
