import API from "@components/API/API";
import Home from "@pages/Home";
import Toast from "@components/API/Toast";
import MainStyle from "./style";

function App() {
  return (
    <MainStyle>
      <Home />
      <Toast />
      <API />
    </MainStyle>
  );
}

export default App;
