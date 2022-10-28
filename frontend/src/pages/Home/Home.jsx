import Header from "@components/Header/Header";
import logo from "@assets/Logo.png";
import HomeStyle from "./Style";

export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <img src={logo} alt="Logo Tech Legend" />
    </HomeStyle>
  );
}
