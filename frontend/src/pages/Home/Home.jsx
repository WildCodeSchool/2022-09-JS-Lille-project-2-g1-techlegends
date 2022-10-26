import Header from "@components/Header/Header";
import logo from "@assets/Logo.png";
import Homestyle from "./style";

export default function Home() {
  return (
    <Homestyle>
      <Header />
      <img src={logo} alt="Logo Tech Legend" />
    </Homestyle>
  );
}
